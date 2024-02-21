import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../common/Icon';
import ContactsAll from './ContactsAll';
import { ReactComponent as SearchIco } from '../../../IMG/iconSearch.svg';

export default function NavigationRowTop() {
    return (
        <div className='navigation__row navigation__row--top'>
            <div className="navigation__col navigation__col--menu">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} to="/about">О нас</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} to="/doctors">Врачи</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} to="/otzivy">Отзывы</NavLink>
            </div>
            <div className="navigation__col navigation__col--search">
                <form action="#" method='GET'>
                    <fieldset className='field'>
                        <input id="header-search" className="input" type="search" name="q"
                            placeholder="Поиск по сайту" maxLength="50" required />
                        <div className='btn-search'>
                            <input name="bttn-search" type="submit" value="" />
                            <SearchIco className="search-ico" />
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="navigation__col navigation__col--contacts">
                <ContactsAll />
            </div>
            <div className="navigation__col navigation__col--button">
                <button className='button font-roboto-medium'><Icon type="pen" width="21px" height="21px" />запись онлайн</button>
            </div>
        </div>
    )
}
