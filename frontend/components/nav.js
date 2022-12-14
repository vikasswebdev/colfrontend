import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className={styles.ukNavbarContainer} data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a style={{ fontSize: 20 }}>codeoflyf</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-middle">
          <ul className="uk-navbar-nav">
            {/* {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })} */}
            <li>
              <Link href={`/work`}>
                <a className="uk-link-reset">Work</a>
              </Link>
            </li>
            <li>
              <Link href={`/services`}>
                <a className="uk-link-reset">Services</a>
              </Link>
            </li>
            <li>
              <Link href={`/blog`}>
                <a className="uk-link-reset">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="uk-navbar-nav">
            <Link href={"/contect"}>
              <a className="uk-link-reset">contect us</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
