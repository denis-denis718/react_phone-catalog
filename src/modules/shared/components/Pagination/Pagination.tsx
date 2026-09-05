import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import styles from './Pagination.module.scss';

type Props = {
  pagesCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  pagesCount,
  currentPage,
  onPageChange,
}: Props) => {
  // [1, 2, ..., pagesCount] — кнопка на каждую страницу
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        type="button"
        className={styles.arrow}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <img src={chevronLeft} alt="" />
      </button>

      <div className={styles.pages}>
        {pages.map(page => (
          <button
            type="button"
            key={page}
            className={page === currentPage ? styles.pageActive : styles.page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={styles.arrow}
        disabled={currentPage === pagesCount}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <img src={chevronRight} alt="" />
      </button>
    </nav>
  );
};
