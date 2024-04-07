import styles from './FolderButtonList.module.css';
import FolderButton from "./FolderButton";

function FolderButtonList({ data, value }) {
  return (
    // <div className={styles.container}>
    //   <FolderButton value={value}/>
    // </div>
    data.map((folder) => (
      <FolderButton value={value}/>
    ))
  );
}

export default FolderButtonList;