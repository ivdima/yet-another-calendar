import React, { useContext } from 'react';

import { ViewIntervalComponentProps } from '../../types/type';
import { daysOfTheWeek } from '../../utils/utils';

const MonthView: React.FC<ViewIntervalComponentProps> = () => {
    //const { isOpenCalendarsPanel } = useContext(CalendarContext);
    return (
        <div className="grid">
            <div className="grid__header">
                {daysOfTheWeek.map(item => (
                    <div 
                        key={item} 
                        className="grid__header__column"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="grid__row">

            </div>
        </div>
    );
}

export default MonthView;
