import styles from './SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function SearchBar({ onSubmit, value, onChange }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <img className={styles.searchIcon} src={searchIcon} alt="돋보기" />
      <input
        className={styles.input}
        name="keyword"
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
      ></input>
  </form>
  );
}

export default SearchBar;