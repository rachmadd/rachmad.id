import { ImageCarousel } from "./ImageCarousel";
import { MediaFrame } from "./MediaFrame";
import { PlaceholderSlide } from "./PlaceholderSlide";
import { ProjectCarousel } from "./ProjectCarousel";
import { VideoLoop } from "./VideoLoop";
import { CONCEPT_COMPONENTS } from "./concepts";
import type { MediaDescriptor } from "./ProjectMedia";

type ProjectMediaViewProps = {
  descriptor: MediaDescriptor;
  paused: boolean;
  className?: string;
};

export function ProjectMediaView({
  descriptor,
  paused,
  className,
}: ProjectMediaViewProps) {
  if (descriptor.kind === "concept") {
    const ConceptComponent = CONCEPT_COMPONENTS[descriptor.component];
    return (
      <MediaFrame className={className}>
        <ConceptComponent />
      </MediaFrame>
    );
  }

  return (
    <MediaFrame className={className}>
      {descriptor.kind === "carousel" ? (
        <ProjectCarousel labels={descriptor.labels} paused={paused} />
      ) : descriptor.kind === "imageCarousel" ? (
        <ImageCarousel slides={descriptor.slides} paused={paused} />
      ) : descriptor.kind === "video" ? (
        <VideoLoop
          webm={descriptor.webm}
          mp4={descriptor.mp4}
          poster={descriptor.poster}
          alt={descriptor.alt}
        />
      ) : (
        <PlaceholderSlide label={descriptor.label} />
      )}
    </MediaFrame>
  );
}
