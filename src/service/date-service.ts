import { MONTH, INTERVAL } from '../types/type';

class DateService {
    constructor (private date: Date) {}

    grid: Array<Array<Date>> = [];
    yearGrid: Array<Array<Array<Date>>> = [];
    
    firstDayOfWeek = 0;

    isLeapYear (year: number) {
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }

    getWeekday () {
        return (this.date.getDay() + 6) % 7;
    }

    addDays(days: number) {
        this.date.setDate(this.date.getDate() + days);
    }

    updateInterval(type: INTERVAL, count: number) {
        if (type === INTERVAL.DAY) {
            this.date.setDate(this.date.getDate() + count);
        }
        if (type === INTERVAL.MONTH) {
            this.date.setMonth(this.date.getMonth() + count);
        }
        if (type === INTERVAL.WEEK) {
            this.date.setDate(this.date.getDate() + count);    
        }
        if (type === INTERVAL.YEAR) {
            this.date.setFullYear(this.date.getFullYear() + count);
        }
    }

    cloneDate() {
        return new Date(
            this.date.getFullYear(),
            this.date.getMonth(),
            this.date.getDate(),
            this.date.getHours(),
            this.date.getMinutes(),
            this.date.getSeconds(),    
        );
    }

    getNumberOfDaysInMonth (year: number, month: MONTH) {
        switch (month) {
            case MONTH.FEB:
                return this.isLeapYear(year) ? 29 : 28;
            case MONTH.JUN:
            case MONTH.SEP:
            case MONTH.NOV:
            case MONTH.APR:
                return 30;
        }
        return 31;
    }

    updateGrid () {
        this.date.setDate(1);

        const weekDay = this.getWeekday();

        this.date.setMonth(this.date.getMonth() - 1);
        this.date.setDate(
            this.getNumberOfDaysInMonth(this.date.getFullYear(), this.date.getMonth()) - (weekDay - 1)
        );
        
        this.grid = [];

        for (var week = 0; week < 6; week++) {
            this.grid[week] = [];
            for (var day = 0; day < 7; day++) {
                this.grid[week][day] = this.cloneDate();
                this.addDays(1);
                let year = this.date.getFullYear();
                if (this.date.getMonth() == 0 && this.date.getDate() == 1) {
                    year++;        
                }
                this.date.setFullYear(year);
            }    
        }    
    }
}

export default DateService;