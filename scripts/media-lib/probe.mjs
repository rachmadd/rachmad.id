// Reads real pixel size / codec / duration / fps / audio presence from a
// media file. Images go through sharp; videos go through ffprobe.

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";

const execFileAsync = promisify(execFile);

export async function probeImage(filePath) {
  const metadata = await sharp(filePath).metadata();
  return { width: metadata.width, height: metadata.height, format: metadata.format };
}

function parseFrameRate(rate) {
  if (!rate || rate === "0/0") return null;
  const [num, den] = rate.split("/").map(Number);
  if (!den) return num;
  return Math.round((num / den) * 100) / 100;
}

export async function probeVideo(filePath) {
  const { stdout } = await execFileAsync("ffprobe", [
    "-v", "error",
    "-print_format", "json",
    "-show_format",
    "-show_streams",
    filePath,
  ]);
  const data = JSON.parse(stdout);
  const videoStream = data.streams.find((stream) => stream.codec_type === "video");
  const audioStream = data.streams.find((stream) => stream.codec_type === "audio");

  if (!videoStream) {
    throw new Error(`No video stream found in ${filePath}`);
  }

  return {
    width: videoStream.width,
    height: videoStream.height,
    codec: videoStream.codec_name,
    fps: parseFrameRate(videoStream.r_frame_rate),
    durationSeconds: Number(data.format?.duration ?? videoStream.duration ?? 0),
    hasAudio: Boolean(audioStream),
  };
}

export function runFfmpeg(args) {
  return execFileAsync("ffmpeg", ["-y", "-hide_banner", "-loglevel", "error", ...args]);
}
