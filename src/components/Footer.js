import { Link } from "react-router-dom";
import Container from "./Container";
import facebookIcon from "../assets/icon_facebook-filled.svg";
import twitterIcon from "../assets/icon_twitter-filled.svg";
import instagramIcon from "../assets/icon_instagram-filled.svg";
import youtubeIcon from "../assets/icon_youtube-filled.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <section class={styles.copyright}>
          ©codeit - 2023
        </section>

        <section className={styles.terms}>
          <Link to="/privacy">Policy</Link>
          <Link to="/faq">FAQ</Link>
        </section>

        <section className={styles.sns}>
          <Link to="https://www.facebook.com" target="_blank">
            <img src={facebookIcon} alt="facebook-logo" />
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter-logo" />
          </Link>
          <Link to="https://www.youtube.com" target="_blank">
            <img src={youtubeIcon} alt="youtube-logo" />
          </Link>
          <Link to="https://www.instagram.com" target="_blank">
            <img src={instagramIcon} alt="instagram-logo" />
          </Link>
        </section>
      </Container>
    </div>
  );
}

export default Footer;
