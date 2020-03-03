import React, { useContext } from 'react';

import { CalendarContext } from '../controller/context';
import { viewRangeOptions } from '../utils/utils';

const Header: React.FC = () => {
    const { handleToggleCalendarsPanel, interval, handleChangeInterval } = useContext(CalendarContext);
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__block header__block-first">
                    <button 
                        onClick={handleToggleCalendarsPanel} 
                        className="button button_with-margin-right"
                    >
                        Calendars
                    </button>
                    <div className="pseudo-button">
                        <span className="pseudo-button__inner">
                            <i className="material-icons">add</i>
                        </span>
                    </div>
                </div>
                <div className="header__block header__block-main">
                    <button className="button button_with-margin-right">Today</button>
                    <div className="pseudo-button">
                        <span className="pseudo-button__inner">
                            <i className="material-icons">chevron_left</i>
                        </span>
                    </div>
                    <div className="pseudo-button">
                        <span className="pseudo-button__inner">
                            <i className="material-icons">chevron_right</i>
                        </span>
                    </div>
                    <div className="title">November 2020</div>
                </div>
                <div className="header__block">
                    <div className="button-groupe">
                        {viewRangeOptions.map(item => (
                            <button 
                                key={item.type} 
                                onClick={() => handleChangeInterval(item.type)}
                                className={`button ${item.type === interval ? 'selected' : ''}`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Header;
