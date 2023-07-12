import DatePicker from 'react-datepicker'
import { employee_data } from '../../../Backend/Types/Types'
import { Dispatch, SetStateAction } from 'react'

interface IHolidayDate {
    employee: employee_data,
    setEmployee: Dispatch<SetStateAction<employee_data>>,
    time_period: string
}

export function HolidayDate({employee, setEmployee, time_period}: IHolidayDate) {
    function handleDates(date: Date | null, time_period: string) {
        setEmployee({
            ...employee,
            holiday: {
                ...employee.holiday,
                [time_period]: [date?.getFullYear(), date?.getMonth() === undefined ? undefined : (1 + date.getMonth()), date?.getDate()].join("/")
            }
        })
    }
    function timeSelected(): Date {
        if (time_period === "start" && employee.holiday.start !== null) {
            return new Date(employee.holiday.start);
        }
        else if (time_period === "end" && employee.holiday.end !== null) {
            return new Date(employee.holiday.end);
        }
        return new Date();
    }
    return (
        <DatePicker
        selected={timeSelected()}
        onChange={(date) => handleDates(date, time_period)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
    />
    )
}