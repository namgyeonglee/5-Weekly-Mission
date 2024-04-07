import plus from "../assets/plus_white.svg";
import styles from '../components/FloatingActionButton.module.css';

function FloatingActionButton() {
  return (
    <button className={styles.button}>
      폴더 추가
      <img src={plus} alt="+" />
    </button>
  );
}

export default FloatingActionButton;