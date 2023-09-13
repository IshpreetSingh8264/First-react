import React from 'react';
import searchButton from './img/search-button.png';
import giftIcon from './img/gift.png';
import loginIcon from './img/login.png';

const Header = () => {
    return (
        <header>
            <section className="header_top">
                <section className="container">
                    <section className="header_top_left">
                        <a href="#">
                            <img src="https://www.funcorp.in/cdn/shop/files/Logo_main_200x.png?v=1667717217"alt="Logo" />
                        </a>
                    </section>
                    <section className="header_top_middle">
                        <form className="header_top_middle_form" action="#" method="get">
                            <input type="text" name="search" className="search" placeholder="Search the store" />
                            <button type="submit" className="search_btn">
                                <img src={searchButton} alt="Search" />
                            </button>
                        </form>
                    </section>
                    <section className="header_top_right">
                        <ul>
                            <li className="header_topright_list">
                                <a href="#" className="topright_list_icon">
                                    &#10084;
                                </a>
                                <a href="#">
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li className="header_topright_list">
                                <a href="#" className="topright_list_img">
                                    <img src={giftIcon} alt="Gift" />
                                </a>
                                <a href="#">
                                    <span>Gift Cards</span>
                                </a>
                            </li>
                            <li className="header_topright_list">
                                <a href="#" className="topright_list_img">
                                    <img src={loginIcon} alt="Login" />
                                </a>
                                <a href="#">
                                    <span>Login</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
            <section className="header_nav">
                <section className="header_nav_left"></section>
                <section className="header_nav_mid"></section>
                <section className="header_nav_right"></section>
            </section>
        </header>
    );
};

export default Header;