import React from 'react';
import { CalendarRepresentation, INTERVAL } from '../types/type';

export const defaultCalendarRepresentation: CalendarRepresentation = {
    isOpenCalendarsPanel: true,
    showWeekends: true,
    interval: INTERVAL.MONTH,
    userSelectedDate: undefined,
    events: [],
    calendars: [],
    grid: [],
    yearGrid: [],
    handleAddEvent: () => {},
    handleSelectedDate: () => {},
    handleUpdateInterval: () => {},
    handleChangeInterval: () => {},
    handleShowWeekends: () => {},
    handleToggleCalendarsPanel: () => {},
};

export const CalendarContext = React.createContext<CalendarRepresentation>(
    defaultCalendarRepresentation,
);