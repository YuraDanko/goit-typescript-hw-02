import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button onClick={onClick} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
