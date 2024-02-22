import { useState } from "react";
import { Button } from "./Button";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = () => {

    const [currentDate, setCurrentDate] = useState(new Date())

    const btnOn = () => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDay);
    }

    const btтDown = () => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() - 1);
        setCurrentDate(nextDay);
    }

    const today = new Date();
    const isToday = currentDate.toDateString() === today.toDateString();

    return (
        <div className="data__block">
            <Button text="<" handel={btтDown} />
            <DatePicker
                selected={currentDate}
                onChange={date => setCurrentDate(date)}
                dateFormat="dd.MM.yyyy"
            />
            <Button text=">" handel={btnOn} dis={isToday} />
        </div>
    );


}