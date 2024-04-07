import shareIcon from '../assets/shareicon.svg';
import EditButtonStyles from '../components/EditButton.module.css';

function ShareButton() {
  return (
    <button className={EditButtonStyles.button}>
      <img src={shareIcon}/>
      공유
    </button>
  );
}

export default ShareButton;