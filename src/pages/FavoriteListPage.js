import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import searchBarStyles from "../components/SearchBar.module.css";
import { getHeaderInformation, getFavoriteList } from "../api";
import Container from '../components/Container';
import Warn from '../components/Warn';
import LinkItem from '../components/LinkItem';
import styles from './Favorite.module.css';
import searchIcon from '../assets/search.svg';
import useInput from "../components/hooks/useInput";

function FavoriteListPage() {
  const [header, setHeader] = useState([]);
  const [owner, setOwner] = useState([]);
  const [links, setLinks] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  
  const [keyword, handleKeywordChange] = useInput(initKeyword);

  const handleLoad = async () => {
    const header = await getHeaderInformation();
    const owner = header.owner;
    const links = await getFavoriteList(keyword);
    setHeader(header);
    setOwner(owner);
    setLinks(links);
  }

  useEffect(() => {
    handleLoad();
  }, [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(keyword ? { keyword } : {});
  }

  return (
    <div>
      <div className={styles.header}>
        <img className={styles.headerUserImg} key={owner.id} src={owner.profileImageSource} alt="임시텍스트" />
        <p className={styles.headerUserName} key={owner.id}>@{owner.name}</p>
        <h1 className={styles.headerTitle} key={header.id}>{header.name}</h1>
      </div>
      
      <Container className={styles.container}>
        <form className={searchBarStyles.form} onSubmit={handleSubmit}>
          <img className={searchBarStyles.searchIcon} src={searchIcon} alt="돋보기" />
          <input
            className={searchBarStyles.input}
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="링크를 검색해 보세요."
          ></input>
        </form>

        {links.length === 0 ? (
          <>
            <Warn
              className={styles.emptyList}
              title="일치하는 링크가 없습니다."
              description=""
            />
          </>
        ) : (
          <ul className={styles.items}>
            {links.map((link) => (
              <li key={link.id} className={styles.item}>
                <LinkItem link={link} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}

export default FavoriteListPage;
