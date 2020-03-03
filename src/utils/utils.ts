import { INTERVAL, ViewRangeOptions } from '../types/type';

export const VIEW_RANGE: Record<string, string> = {
    DAY: 'Day',
    WEEK: 'Week',
    MONTH: 'Month',
    YEAR: 'Year',
};

export const viewRangeOptions: ViewRangeOptions[] = [
    { title: VIEW_RANGE.DAY, type: INTERVAL.DAY },
    { title: VIEW_RANGE.WEEK, type: INTERVAL.WEEK },
    { title: VIEW_RANGE.MONTH, type: INTERVAL.MONTH },
    { title: VIEW_RANGE.YEAR, type: INTERVAL.YEAR },
];

export const daysOfTheWeek = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];