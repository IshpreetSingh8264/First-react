import React from 'react'

const Header = () => {
    return (
        <header>
            <section class="header_top">
                <section class="container">
                    <section class="header_top_left">
                        <a href="#">
                            <img src="https://www.funcorp.in/cdn/shop/files/Logo_main_200x.png?v=1667717217" alt=""/>
                        </a>
                    </section>
                    <section class="header_top_middle">
                        <form class="header_top_middle_form" action="#" method="get">
                            <input type="text" name="search" class="search" placeholder="Search the store"/>
                                <button type="submit" class="search_btn"><img src="./img/search-button.png" alt=""/></button>
                        </form>
                    </section>
                    <section class="header_top_right">
                        <ul>
                            <li class="header_topright_list">
                                <a href="#" class="topright_list_icon">&#10084;</a>
                                <a href="#"><span>Wishlist</span></a>
                            </li>
                            <li class="header_topright_list">
                                <a href="#" class="topright_list_img"><img src="./img/gift.png" alt=""/></a>
                                <a href="#"><span>Gift Cards</span></a>
                            </li>
                            <li class="header_topright_list">
                                <a href="#" class="topright_list_img"><img src="./img/login.png" alt=""/></a>
                                <a href="#"><span>Wishlist</span></a>
                            </li>

                        </ul>
                    </section>
                </section>
            </section>
            <section class="header_nav">
                <section class="header_nav_left">

                </section>
                <section class="header_nav_mid"></section>
                <section class="header_nav_right"></section>
            </section>
        </header>
    )
}

export default Header
