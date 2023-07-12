import { employee_data } from "../../../Backend/Types/Types"

interface IReadOnlyRoeProps {
    employee: employee_data,
    index: number,
    setEdit: (num: number) => void,
    handleServerData: (data: any, path: string) => Promise<void>
}

export function ReadOnlyRow({ employee, index, setEdit, handleServerData } : IReadOnlyRoeProps) {
    function handleEdite(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setEdit(employee.id);
    }
    function handleHoliday(): string {
        if (employee.holiday.start && employee.holiday.end) {
            return [employee.holiday.start, employee.holiday.end].join(" to ");
        }
        return "No Holiday Plan";
    }

    return (
        <tr key = {index}>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.id}</td>
            <td>
                {employee.work_days.Monday ? "M | " : "❌ | "}
                {employee.work_days.Tusday ? "T | " : "❌ | "}
                {employee.work_days.Wednsday ? "W | " : "❌ | "}
                {employee.work_days.Thursday ? "T | " : "❌ | "}
                {employee.work_days.Friday ? "F | " : "❌ | "}
                {employee.work_days.Saturday ? "S | " : "❌ | "}
                {employee.work_days.Sunday ? "S" : "❌"}
            </td>
            <td>{handleHoliday()}</td>
            <td>
                <button 
                type = "button" 
                onClick = {(event) => handleEdite(event)}
                >Edit</button>
            </td>
            <td>
                <button
                type = "button"
                onClick = {(event) => handleServerData(employee, 'delete')}
                >Delete</button>
            </td>
        </tr>
    )
}