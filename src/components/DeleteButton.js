import deleteIcon from '../assets/deleteicon.svg';
import EditButtonStyles from '../components/EditButton.module.css';

function DeleteButton() {
  return (
    <button className={EditButtonStyles.button}>
      <img src={deleteIcon}/>
      삭제
    </button>
  );
}

export default DeleteButton;