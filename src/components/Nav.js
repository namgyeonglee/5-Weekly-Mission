import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserInformation } from "../api";
import Container from "./Container";
import logoImg from "../assets/logo-text.svg";
import styles from "./Nav.module.css";

function Nav() {
  const [user, setUser] = useState([]);

  const handleLoad = async () => {
    const user = await getUserInformation();
    setUser(user);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img
            className={styles.headerLogo}
            src={logoImg}
            alt="Linkbrary-logo"
          />
        </Link>

        {!user ? (
          <>
            <p className={styles.headerLogin}>로그인</p>
          </>
        ) : (
          <div className={styles.userProfile}>
            <img className={styles.userImg} src={user.profileImageSource} alt="사람" />
            <p className={styles.userEmail} key={user.id}>{user.email}</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Nav;
