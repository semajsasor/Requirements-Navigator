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

function isDemoVideoUrl(value?: string) {
  if (!value?.trim()) {
    return false;
  }

  try {
    return new URL(value).pathname.includes("-demo");
  } catch {
    return false;
  }
}

export function isDirectVideoFileUrl(value?: string) {
  if (!value?.trim()) {
    return false;
  }

  try {
    const pathname = new URL(value).pathname.toLowerCase();

    return [".mp4", ".webm", ".ogg", ".mov"].some((extension) =>
      pathname.endsWith(extension),
    );
  } catch {
    return false;
  }
}

function hasRealVideoUrl(value?: string) {
  return hasHttpVideoUrl(value) && !isDemoVideoUrl(value);
}

export function isRealEmbeddableVideoUrl(value?: string) {
  return hasRealVideoUrl(value);
}

export function isUsableVideoTutorial(
  tutorial: ProcessVideoTutorial | undefined,
) {
  return Boolean(
    tutorial?.title.trim() &&
      (hasRealVideoUrl(tutorial.embedUrl) ||
        (hasRealVideoUrl(tutorial.url) && isDirectVideoFileUrl(tutorial.url))),
  );
}

export function getFirstUsableVideoTutorial(process: ProcessGuide) {
  return process.videoTutorials?.find(isUsableVideoTutorial);
}

export function hasVideoTutorial(process: ProcessGuide) {
  return Boolean(getFirstUsableVideoTutorial(process));
}
