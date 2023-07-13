import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuMobile from "./Menu/MenuMobile";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const menuHandler = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  const [scrollState, setScrollState] = useState("top");
  
  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") setScrollState("amir");
      } else {
        if (scrollState !== "top") setScrollState("top");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <header id="header" className={styles.header} 
      style={scrollState === 'amir'
      ? {height: '80px'}
      : {}
    }>
      <Logo />
      <Menu menuHandler={menuHandler} />
      {isMobile && (
        <MenuMobile isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
      )}
    </header>
  );
};

export default Header;
