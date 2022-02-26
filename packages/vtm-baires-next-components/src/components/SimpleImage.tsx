import {ImgHTMLAttributes} from "react";

type SimpleImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    align?: string;
    hspace?: string;
    vspace?: string;
    rel?: string;
}

const SimpleImage = (props: SimpleImageProps) => (
    <img {...props} />
);

export default SimpleImage;
