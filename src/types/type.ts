
export enum MONTH {
    JAN = 0,
    FEB = 1,
    MAR = 2,
    APR = 3,
    MAY = 4,
    JUN = 5,
    JUL = 6,
    AUG = 7,
    SEP = 8,
    OCT = 9,
    NOV = 10,
    DEC = 11,
};

export enum WEEK_DAY {
    MON = 0,
    TUE = 1,
    WED = 2,
    THU = 3,
    FRI = 4,
    SAT = 5,
    SUN = 6,
};

export enum INTERVAL {
    DAY = 'D',
    WEEK = 'W',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
};

export type Calendar = {};

export type Event = {};

export type ViewRangeOptions = {
    title: string;
    type: INTERVAL;
};

export type ViewIntervalComponentProps = {
    interval: INTERVAL;
    events?: Event[];
    userSelectedDate?: Date;
    grid?: Array<Array<Date>>;
    yearGrid?: Array<Array<Array<Date>>>;
    handleAddEvent: (newEvent: Event) => void;
    handleSelectedDate: (userDate: Date) => void;
};

export type CalendarRepresentation = {
    isOpenCalendarsPanel: boolean;
    showWeekends: boolean;

    interval: INTERVAL;
    
    userSelectedDate?: Date;
    
    events?: Event[];
    calendars: Calendar[];
    
    grid: Array<Array<Date>>;
    yearGrid: Array<Array<Array<Date>>>;

    handleAddEvent: (newEvent: Event) => void;
    handleSelectedDate: (userDate: Date) => void;
    handleUpdateInterval: (count: number) => void;
    handleChangeInterval: (newInterval: INTERVAL) => void;
    handleShowWeekends: () => void;
    handleToggleCalendarsPanel: () => void;
};
