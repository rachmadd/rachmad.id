"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useRouter } from "@/i18n/navigation";

type ProjectModalProps = {
  title: string;
  children: ReactNode;
};

export function ProjectModal({ title, children }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) {
      dialog.showModal();
    }

    const handleClose = () => {
      router.back();
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [router]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      }}
      className="m-auto max-h-[90vh] w-full max-w-[880px] overflow-y-auto rounded-card border border-[rgba(255,255,255,0.1)] bg-surface p-5 backdrop:bg-[rgba(11,11,13,0.9)] md:p-10"
    >
      {children}
    </dialog>
  );
}
