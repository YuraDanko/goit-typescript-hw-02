import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (url: string) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={css.wrapperGallery}>
      {images.map((image) => (
        <li key={image.id} style={{ listStyleType: "none" }}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.full)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
