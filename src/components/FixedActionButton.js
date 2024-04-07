import plus from "../assets/plus.svg";
import styles from '../components/FixedActionButton.module.css';

function FixedActionButton() {
  return (
    <button className={styles.button}>
      폴더 추가
      <img src={plus} alt="+" />
    </button>
  );
}

export default FixedActionButton;