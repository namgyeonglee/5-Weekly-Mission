import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { AddFolderButton } from "folder/ui-add-folder-button";
import { FolderButton } from "folder/ui-folder-button";
import { IconAndTextButton } from "sharing/ui-icon-and-text-button";
import { ALL_LINKS_TEXT, BUTTONS } from "./constant";
import { ALL_LINKS_ID } from "link/data-access-link/constant";
import { useModals } from "folder/modal/useModal";
import { InputModal } from "folder/modal/InputModal";
import { Modals } from "folder/modal/Modals";
import { ShareModal } from "folder/modal/ShareModal";

const cx = classNames.bind(styles);

export const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;

  const { openModal } = useModals();

  const handleClick = (e) => {
    if (e.target.innerText === "폴더 추가") {
      openModal(InputModal, {
        title: "폴더 추가",
        button: "추가하기",
        onSubmit: () => {
          console.log("ffff");
        },
      });
    }

    if (e.target.innerText === "이름 변경") {
      openModal(InputModal, {
        title: "폴더 이름 변경",
        button: "변경하기",
        onSubmit: () => {
          console.log("ffff");
        },
      });
    }

    if (e.target.innerText === "공유") {
      openModal(ShareModal, {
        title: "폴더 공유",
        subtitle: "폴더명",
        onSubmit: () => {
          console.log("ffff");
        },
      });
    }
  };

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
        <AddFolderButton onClick={handleClick} />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx("buttons")}>
          {BUTTONS.map((buttonData) => (
            <IconAndTextButton
              key={buttonData.text}
              {...buttonData}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
      <Modals />
    </div>
  );
};
