import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import styles from './BackButton.module.scss';

// работает как кнопка "назад" в браузере: шаг по истории, а не фиксированный путь
export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button type="button" className={styles.back} onClick={() => navigate(-1)}>
      <img src={arrowLeft} alt="" />
      Back
    </button>
  );
};
