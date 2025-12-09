const images = import.meta.glob("../assets/images/items/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function getImage(imageDesc: string, imageSize: string): string | undefined{
  imageDesc = imageDesc.toLowerCase().replace("-", "_") + "_" + imageSize
  for (const path in images) {
    if (path.endsWith(imageDesc)) {
      return images[path];
    }
  }
  return undefined;
}