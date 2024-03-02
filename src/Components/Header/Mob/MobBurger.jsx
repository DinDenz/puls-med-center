import React, { useState } from 'react';
import MobBurgerMenu from './MobBurgerMenu';
import itemsAc from './dataForBurgerMenu';


export default function MobBurger() {
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }
    return (
        <>
            <div className={`burger-button ${isActive ? 'active' : 'unactive'}`}
                onClick={toggle}>
                <span></span>
            </div>
            <MobBurgerMenu itemsAc={itemsAc} open={isActive} setOpen={setIsActive} />
        </>
    )
}
