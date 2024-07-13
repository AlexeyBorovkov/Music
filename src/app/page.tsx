import Image from "next/image";
import styles from "./page.module.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="wrapper">
  <div className="container">
    <main className="main">
      <nav className="main__nav nav">
        <div className="nav__logo logo">
          <Image className="logo__image" src="/img/logo.png" alt={""} width={114} height={17} />
        </div>
        <div className="nav__burger burger">
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </div>
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a
                className="menu__link"
                href="#"
              >
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__link"
                href="#"
              >
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__link"
                href="../signin.html"
              >
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </svg>
          <input
            className="search__text"
            name="search"
            placeholder="Поиск"
            type="search"
          />
        </div>
        <h2 className="centerblock__h2">
          Треки
        </h2>
        <div className="centerblock__filter filter">
          <div className="filter__title">
            Искать по:
          </div>
          <div className="filter__button button-author _btn-text">
            исполнителю
          </div>
          <div className="filter__button button-year _btn-text">
            году выпуска
          </div>
          <div className="filter__button button-genre _btn-text">
            жанру
          </div>
        </div>
        <div className="centerblock__content playlist-content">
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">
              Трек
            </div>
            <div className="playlist-title__col col02">
              Исполнитель
            </div>
            <div className="playlist-title__col col03">
              Альбом
            </div>
            <div className="playlist-title__col col04">
              <svg className="playlist-title__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </svg>
            </div>
          </div>
          <div className="content__playlist playlist">
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Guilt{' '}
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Nero
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Welcome Reality
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    4:44
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Elektro{' '}
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Dynoro, Outwork, Mr. Gee
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Elektro
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    2:22
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      I’m Fire{' '}
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Ali Bakgor
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    I’m Fire
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    2:22
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Non Stop
                      <span className="track__title-span">
                        (Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Стоункат, Psychopath
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Non Stop
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    4:12
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Run Run
                      <span className="track__title-span">
                        (feat. AR/CO)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Jaded, Will Clarke, AR/CO
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Run Run
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    2:54
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Eyes on Fire
                      <span className="track__title-span">
                        (Zeds Dead Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Blue Foundation, Zeds Dead
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Eyes on Fire
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    5:20
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Mucho Bien
                      <span className="track__title-span">
                        (Hi Profile Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Mucho Bien
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    3:41
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Knives n Cherries
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    minthaze
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Captivating
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    1:48
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      How Deep Is Your Love
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Calvin Harris, Disciples
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    How Deep Is Your Love
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    3:32
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      Morena{' '}
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  >
                    Tom Boxer
                  </a>
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  >
                    Soundz Made in Romania
                  </a>
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text">
                    3:36
                  </span>
                </div>
              </div>
            </div>
            <div className="playlist__item">
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <svg className="track__title-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track__title-text">
                    <a
                      className="track__title-link"
                      href="http://"
                    >
                      <span className="track__title-span" />
                    </a>
                  </div>
                </div>
                <div className="track__author">
                  <a
                    className="track__author-link"
                    href="http://"
                  />
                </div>
                <div className="track__album">
                  <a
                    className="track__album-link"
                    href="http://"
                  />
                </div>
                <div className="track__time">
                  <svg className="track__time-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                  <span className="track__time-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Sidebar/>
    </main>

    <footer className="footer" />
  </div>
</div>
  );
}
