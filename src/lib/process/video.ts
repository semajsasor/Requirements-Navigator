import type { ProcessGuide, ProcessVideoTutorial } from "@/types/process";

function hasHttpVideoUrl(value?: string) {
  if (!value?.trim()) {
    return false;
  }

  try {
    const url = new URL(value);

    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function isUsableVideoTutorial(
  tutorial: ProcessVideoTutorial | undefined,
) {
  return Boolean(
    tutorial?.title.trim() &&
      (hasHttpVideoUrl(tutorial.url) || hasHttpVideoUrl(tutorial.embedUrl)),
  );
}

export function getFirstUsableVideoTutorial(process: ProcessGuide) {
  return process.videoTutorials?.find(isUsableVideoTutorial);
}

export function hasVideoTutorial(process: ProcessGuide) {
  return Boolean(getFirstUsableVideoTutorial(process));
}
