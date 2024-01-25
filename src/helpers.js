export const imageUrlToBase64 = async (url) => {
  const image = await fetch({ url: url, method: "GET", encoding: null }),
    img = await image.arrayBuffer(),
    imgBuffer = Buffer.from(img),
    imgBase64 = imgBuffer.toString("base64"),
    imgDataUrl = "data:image/png;base64," + imgBase64;

  return imgDataUrl;
};
