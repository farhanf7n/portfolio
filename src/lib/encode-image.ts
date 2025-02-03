/**
 * Fetch an image and encode it as a base64 data URI.
 *
 * @param url - The image's URL.
 */
export async function encodeImage(url: string) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  const mime = response.headers.get('content-type') as string;

  return `data:${mime};base64,${base64}`;
}
