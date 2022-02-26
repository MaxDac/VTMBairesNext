/**
 * Gets the resized dimensions.
 * @param maxWidth The desired max width.
 * @param maxHeight The desired max height.
 * @return The computed dimensions.
 */
const getResizedImageDimensions = (maxWidth: number, maxHeight: number) =>
    (width: number, height: number) => {
        if (width > height) {
            if (width > maxWidth) {
                return [maxWidth, Math.round(height * maxWidth / width)];
            }
        }
        else if (height > maxHeight) {
            return [Math.round(width * maxHeight / height), maxHeight];
        }

        return [width, height];
    };

/**
 * Compresses the image passed in input using the Canvas.
 * @param file The file.
 * @param maxWidth The image max width.
 * @param maxHeight The image max height.
 * @return The compressed image.
 */
export const compressImage = (file: File, maxWidth: number, maxHeight: number): Promise<string> => {
    const blobURL = window.URL.createObjectURL(file);
    const img = new Image();
    img.src = blobURL;

    return new Promise<string>((res, rej) => {
        img.onerror = function () {
            window.URL.revokeObjectURL(this.src);
            console.error("Cannot load image.");
        }

        img.onload = function () {
            window.URL.revokeObjectURL((this as any).src);
            const [newWidth, newHeight] = getResizedImageDimensions(maxWidth, maxHeight)(img.width, img.height);
            const canvas: HTMLCanvasElement = document.createElement("canvas");

            canvas.width = newWidth;
            canvas.height = newHeight;

            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, newWidth, newHeight);

            canvas.toBlob((blob: Blob | null) => {
                if (blob != null) {
                    const reader = new FileReader();
                    reader.onloadend = () => res(String(reader.result));
                    reader.onerror = e => rej(e);
                    reader.readAsDataURL(blob);
                }
            }, "image/png", 0.7);
        }
    });
};

/**
 * Make the file downloadable by DOM manipulation.
 * @param fileName The file name.
 * @param text The file text.
 */
export const downloadFile = (fileName: string, text: string) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body?.appendChild(element);
    element.click();
    document.body?.removeChild(element);
};
