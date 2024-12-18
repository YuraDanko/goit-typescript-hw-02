import css from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard = ({ src, alt, onClick }: ImageCardProps) => {
  return (
    <div onClick={onClick} className={css.card}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
