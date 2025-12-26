type imageSize = '64' | '256'

export function getImage(imageDesc: string, imageSize: string): string | undefined{
  const cleanName = imageDesc.toLowerCase().replaceAll("_", "-");

  return `/Assets/images/items/${cleanName}_${imageSize}.png`;
}