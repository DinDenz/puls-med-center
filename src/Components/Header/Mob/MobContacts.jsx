import React, { useRef, useState, useEffect } from 'react';
import MobContactsDrop from './MobContactsDrop';

export default function MobContacts() {
    const [isMobContOpen, setIsMobContOpen] = useState(false);
    const dropMobRef = useRef();
    const mobContRef = useRef();

    function toggleContMob() {
        setIsMobContOpen(!isMobContOpen);
    }

    function closingClickOutside(event) {
        if (dropMobRef.current && !mobContRef.current.contains(event.target)) {
            setIsMobContOpen(false);
        }
    };

    useEffect(() => {
        if (isMobContOpen) {
            mobContRef.current.style.backgroundColor = "rgb(243, 243, 243)";
        } else {
            mobContRef.current.style.backgroundColor = "";
        }
    })

    useEffect(() => {
        document.addEventListener('mousedown', closingClickOutside);
        return () => {
            document.removeEventListener('mousedown', closingClickOutside);
        };
    }, [isMobContOpen]);

    return (
        <div ref={mobContRef} className="contacts-mobile">
            <div onClick={toggleContMob} className="toggle" aria-expanded={isMobContOpen}>
                111</div>
            <div ref={dropMobRef} className={`dropdown-menu ${isMobContOpen ? 'show' : ''}`}>
                <div className='container'>
                    <div className="contacts-head-mob">
                        <MobContactsDrop />
                    </div>
                </div>
            </div>
        </div>
    )
}