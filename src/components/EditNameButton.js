import editIcon from '../assets/penicon.svg';
import EditButtonStyles from '../components/EditButton.module.css';

function EditNameButton() {
  return (
    <button className={EditButtonStyles.button}>
      <img src={editIcon}/>
      수정
    </button>
  );
}

export default EditNameButton;