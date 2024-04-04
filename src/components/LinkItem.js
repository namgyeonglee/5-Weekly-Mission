import { Link } from "react-router-dom";
import { format } from "date-fns";
import styles from "./LinkItem.module.css";
import noImg from "../assets/card_basic_img.png"

function LinkItem({ link }) {
  const dateTime = link.createdAt;
  const dateFormatted = format(dateTime, "yyyy. MM. dd");

  function getDiffFromNow() {
    const now = new Date();
    const createdAtDate = new Date(dateTime);
    const diffInMilliSeconds = now - createdAtDate;

    // 2분 미만
    const diffInMinutes = diffInMilliSeconds / 60 / 1000;
    if (diffInMinutes < 2) {
      return "1 minute ago";
    }

    // 59분 이하
    if (diffInMinutes < 60) {
      return `${Math.floor(diffInMinutes)} minutes ago`;
    }

    // 60분 이상
    const diffInHours = diffInMinutes / 60;
    if (diffInHours < 2) {
      return "1 hour ago";
    }

    // 23시간 이하
    if (diffInHours < 24) {
      return `${Math.floor(diffInHours)} hours ago`;
    }

    // 24시간 이상
    const diffInDays = diffInHours / 24;
    if (diffInDays < 2) {
      return "1 day ago";
    }

    // 30일 이하
    if (diffInDays < 31) {
      return `${Math.floor(diffInDays)} hours ago`;
    }

    // 31일 이상
    const diffInMonths = diffInDays / 31;
    if (diffInMonths < 2) {
      return "1 month ago";
    }

    // 11달 이하
    if (diffInMonths < 12) {
      return `${Math.floor(diffInMonths)} months ago`;
    }

    // 12달 이상
    const diffInYears = diffInMonths / 12;
    if (diffInYears < 2) {
      return "1 year ago";
    }

    // 00달 이상
    return `${Math.floor(diffInYears)} years ago`;
  }

  return (
    <Link to="/" target="_blank">
      <div className={styles.card}>
        <div className={styles.imgBox}>
        
        {link.imageSource ? (
          <img
            className={styles.cardImg}
            src={link.imageSource}
            alt={link.title}
          />
        ) : (
          <img
          className={styles.cardImg}
          src={noImg}
          alt={link.title}
          />
        )}

        </div>
        <div className={styles.cardTexts}>
          <p className={styles.createdAt}>{getDiffFromNow()}</p>
          <p className={styles.description}>{link.description}</p>
          <p className={styles.date}>{dateFormatted}</p>
        </div>
      </div>
    </Link>
  );
}

export default LinkItem;
