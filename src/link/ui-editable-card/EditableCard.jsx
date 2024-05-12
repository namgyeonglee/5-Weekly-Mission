import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import styled from "styled-components";

const cx = classNames.bind(styles);

const KebabPopOverLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 230px;
  left: 280px;
  width: 100px;
  align-items: flex-start;
  gap: 2px;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

const KebabPopOver = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: var(--gray-light-gray-100, #333236);
  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: var(--Linkbrary-gray10, #e7effb);
    color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [isKebabClicked, setIsKebabClicked] = useState(false);

  const handleClickKebab = (e) => {
    e.preventDefault();
    if (isKebabClicked === false) {
      setIsKebabClicked(true);
    }

    if (isKebabClicked === true) {
      setIsKebabClicked(false);
    }
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button className={cx("kebab")} onClick={handleClickKebab}>
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        {isKebabClicked && (
          <KebabPopOverLayout>
            <KebabPopOver
              onClick={(e) => {
                e.preventDefault();
                console.log("hi");
              }}
            >
              삭제하기
            </KebabPopOver>
            <KebabPopOver
              onClick={(e) => {
                e.preventDefault();
                console.log("hi");
              }}
            >
              폴더에 추가
            </KebabPopOver>
          </KebabPopOverLayout>
        )}
      </Card>
    </a>
  );
};
