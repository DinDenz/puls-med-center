import React, { useRef, useState, useEffect } from 'react';

export default function MobContactsDrop() {

    return (
        <>
            <div className='contacts__all-mob'>
                <div className='contacts__dropdown dropdown'>
                    <a className="dropdown__tel" href="tel:111">
                        111 (A1, МТС, Life)
                    </a>
                </div>
                <div className="contacts__workingtime">
                    Ежедневно с 8.00 до 20.00
                </div>
            </div>
            <div className="button-mobile-drop">
                <a href='https://talon.by/' className="drop-mob-but font-roboto-medium">запись онлайн</a>
            </div>

        </>
    )
}
