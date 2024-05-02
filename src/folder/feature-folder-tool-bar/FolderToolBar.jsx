import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { AddFolderButton } from "folder/ui-add-folder-button";
import { FolderButton } from "folder/ui-folder-button";
import { IconAndTextButton } from "sharing/ui-icon-and-text-button";
import { ALL_LINKS_TEXT, BUTTONS } from "./constant";
import { ALL_LINKS_ID } from "link/data-access-link/constant";
import { Modal } from "folder/modal/Modal";
import { useState } from "react";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;

  const [modalOpen, setModalOpen] = useState(false);

  function showModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx("add-button")}>
        <AddFolderButton onClick={showModal}/>
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx("buttons")}>
          {BUTTONS.map((buttonData) => (
            <IconAndTextButton key={buttonData.text} {...buttonData} />
          ))}
        </div>
      )}
      {modalOpen && (<Modal title="폴더 추가" button="추가하기" onClick={closeModal} />)}
    </div>
  );
};
