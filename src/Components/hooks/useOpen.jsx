import { useEffect, useState, useRef } from 'react';

export const useOpen = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const dropRef = useRef();

    const toggleDrop = (e) => {
        setOpen(!open);
    };

    const closingClickOutside = (event) => {
        if (dropRef.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closingClickOutside);
        return () => {
            document.removeEventListener('mousedown', closingClickOutside);
        };
    }, [open]);

    return { open, setOpen, ref, dropRef, toggleDrop };
};
//функционал по открытию-закрытию выпадающего псевдоселекта