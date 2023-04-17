import React from 'react'
import './Header.scss' 
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <section className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <nav className='header__nav'>
                        <a href='' className='header__link'>
                            <img src={Logo} alt="logo" />
                        </a>
                        <NavLink to="/" className='header__link'>Каталог</NavLink>
                        <NavLink to="/delivery" className='header__link'>Доставка</NavLink>
                        <NavLink to="/payment" className='header__link'>Оплата</NavLink>
                        <NavLink to="/contacts" className='header__link'>Контакты</NavLink>
                        <NavLink to="/galery" className='header__link'>О галерее</NavLink>
                    </nav>

                    <div className='header__search'>
                        <input type="text" className='header__input' placeholder='Поиск по названию картины' />
                        <button className="header__find">Найти</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

