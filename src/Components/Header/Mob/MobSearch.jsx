import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as SearchIco } from '../../../IMG/iconSearch.svg';


export default function MobSearch() {
    const [isSearhOpen, setIsSearchOpen] = useState(false);
    const dropdownMobRef = useRef();
    const mobRef = useRef();

    function toggleSearchMob() {
        setIsSearchOpen(!isSearhOpen);
    }

    function closingClickOutside(event) {
        if (dropdownMobRef.current && !mobRef.current.contains(event.target)) {
            setIsSearchOpen(false);
        }
    };

    useEffect(() => {
        if (isSearhOpen) {
            mobRef.current.style.backgroundColor = "rgb(243, 243, 243)";
        } else {
            mobRef.current.style.backgroundColor = "";
        }
    })

    useEffect(() => {
        document.addEventListener('mousedown', closingClickOutside);
        return () => {
            document.removeEventListener('mousedown', closingClickOutside);
        };
    }, [isSearhOpen]);

    return (
        <div ref={mobRef} className="search-mobile">
            <div className='ico-cont' onClick={toggleSearchMob}>
                <SearchIco className="search-ico" />
            </div>
            <div ref={dropdownMobRef} className={`dropdown-menu ${isSearhOpen ? 'show' : ''}`}>
                <div className='container'>
                    <div className="search-head-mob">
                        <form className="sd" action="#" method='GET'>
                            <fieldset className='field-mob'>
                                <input id="header-search-mob" className="input" type="search" name="q"
                                    placeholder="Поиск по сайту" maxLength="50" required />
                                <input className="btn-search-mob" name="btn-search" type="submit" value="Найти" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
