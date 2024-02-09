import React from 'react';

export default function TabsNavigation({ setSelectedTab, selectedTab }) {

    const selectTab = (event) => {
        event.preventDefault();
        setSelectedTab(event.target.textContent)
    }
    return (
        <nav>
            <ul className="nav-list">
                <li><a
                    onClick={selectTab}
                    className={selectedTab === 'Направления' ? 'activeTab' : 'inactive'}
                    href="#">Направления</a></li>
                <li><a
                    onClick={selectTab}
                    className={selectedTab === 'Анализы' ? 'activeTab' : 'inactive'}
                    href="#">Анализы</a></li>
                <li><a
                    onClick={selectTab}
                    className={selectedTab === 'Диагностика' ? 'activeTab' : 'inactive'}
                    href="#">Диагностика</a></li>
            </ul>
        </nav>
    )
}
