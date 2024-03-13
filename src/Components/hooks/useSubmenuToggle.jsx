import { useState } from "react";

 export const useSubmenuToggle = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    const showMenu = () => {
        setIsShowMenu(true);
    };

    const hideMenu = () => {
        setIsShowMenu(false);
    };

    return {
        isShowMenu,
        showMenu,
        hideMenu,
    };
};