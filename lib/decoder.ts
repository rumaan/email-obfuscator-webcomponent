/**
 * Original Source Code: https://creativetechguy.com/utilities/emailobfuscator
 *
 * @param canvas Offscreen Canvas Element
 * @param img Image Element
 * @returns decoded Anchor link element template string
 */

export function decodeImage(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    let width = img.width;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    if (!ctx) {
      reject("Failed to getContext on the Canvas");
      return;
    }

    ctx.drawImage(img, 0, 0);
    let decodedAnchor = "";
    let block = "";
    let x = 0;
    let y = 0;
    let arr: Uint8ClampedArray;
    while (y < canvas.height) {
      arr = ctx.getImageData(x, y, 1, 1).data;
      if (arr[3] === 0) {
        break;
      }
      block +=
        String.fromCharCode(arr[0]) +
        String.fromCharCode(arr[1]) +
        String.fromCharCode(arr[2]);
      if (++x === width) {
        x = 0;
        y++;
      }
    }

    block = block.replace(/ÿ/g, "");

    try {
      for (;;) {
        block = atob(block);
      }
    } catch (g) {
      let temp;
      decodedAnchor = "";
      for (let i = 0; i < block.length; i += 3) {
        temp = String.fromCharCode(
          parseInt(block.substring(i, i + 3).replace(/\./, ""), 10)
        );
        decodedAnchor += temp;
      }
    }

    resolve(decodedAnchor);
  });
}
