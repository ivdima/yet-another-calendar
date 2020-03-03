import React, { useContext } from 'react';

import { CalendarContext } from '../controller/context';

const Sidebar: React.FC = () => {
    const { isOpenCalendarsPanel } = useContext(CalendarContext);
    return (
        <div className={`sidebar sidebar_visibility-${isOpenCalendarsPanel}`}>
            <div className="sidebar__content">
                12345
            </div>    
        </div>
    );
}

export default Sidebar;
