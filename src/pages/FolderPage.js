import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getFavoriteList, getAllFavoriteList, getFolderName } from "../api";
import useInput from "../components/hooks/useInput";
import styles from "./FolderPage.module.css";
import shareIcon from "../assets/icon_share.svg";
import Container from "../components/Container";
import Button from "../components/Button";
import AddLinkStyles from "../components/AddLink.module.css";
import Warn from "../components/Warn";
import LinkItem from "../components/LinkItem";
import SearchBar from "../components/SearchBar";
import FolderButton from "../components/FolderButton";
import ShareButton from "../components/ShareButton";
import EditNameButton from "../components/EditNameButton";
import DeleteButton from "../components/DeleteButton";
import EditButtonStyles from "../components/EditButton.module.css";
import FixedActionButton from "../components/FixedActionButton";
import FloatingActionButton from "../components/FloatingActionButton";
import { useMediaQuery } from "react-responsive";
import FolderButtonstyles from "../components/FolderButton.module.css";

function FolderPage() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [links, setLinks] = useState([]);
  const [data, setData] = useState([]);
  const [folderId, setFolderId] = useState(-1);
  const [folderName, setFolderName] = useState("전체");
  const [active, setActive] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");

  const [keyword, handleKeywordChange] = useInput(initKeyword);

  const handleLoad = async () => {
    if (folderName === "전체") {
      const links = await getAllFavoriteList(keyword);
      setLinks(links);
    } else {
      const links = await getFavoriteList(keyword, folderId);
      setLinks(links);
    }
    const data = await getFolderName();
    return setData(data);
  };

  useEffect(() => {
    handleLoad();
  }, [keyword, folderId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(keyword ? { keyword } : {});
  };

  const handleFolderButtonClick = (e) => {
    e.preventDefault();
    const folderId = e.target.id;
    const folderName = e.target.value;
    setFolderId(folderId);
    setFolderName(folderName);
    setActive(true);
  };

  return (
    <div>
      <div className={styles.header}>
        <form className={AddLinkStyles.form}>
          <img className={AddLinkStyles.shareIcon} src={shareIcon} />
          <input
            className={AddLinkStyles.input}
            placeholder="링크를 추가해 보세요"
          ></input>
          <Button size="medium">추가하기</Button>
        </form>
      </div>

      <Container className={styles.container}>
        <SearchBar
          onSubmit={handleSubmit}
          value={keyword}
          onChange={handleKeywordChange}
        />

        <div className={styles.folders}>
          <div className={styles.folders__layout}>
            <button
              className={FolderButtonstyles.button}
              key="0"
              id="0"
              value="전체"
              active={active}
              onClick={handleFolderButtonClick}
            >
              전체
            </button>
            {data.map((folder, i) => (
              <FolderButton
                key={folder.id}
                id={folder.id}
                value={folder.name}
                active={active}
                onClick={handleFolderButtonClick}
              />
            ))}
          </div>
          {isPc && <FixedActionButton />}
          {isMobile && <FloatingActionButton />}
        </div>

        <div className={styles.folderInfo}>
          <p className={styles.foldername}>{folderName}</p>

          {(folderName === "전체") &&
          <div className={EditButtonStyles.container}>
            <ShareButton />
            <EditNameButton />
            <DeleteButton />
          </div>}
        </div>
        
        {links.length === 0 ? (
          <>
            <Warn
              className={styles.emptyList}
              title="저장된 링크가 없습니다."
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

export default FolderPage;
