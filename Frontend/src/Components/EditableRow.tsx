import { employee_data } from "../../../Backend/Types/Types"
import { days_of_the_week } from "../Data/data"
import { useEmployee } from "../Hooks/useEmployee"

interface IEdiableRowProps {
    employee_info: employee_data,
    setEdit: (num: number) => void,
    handleServerData: (data: any, path: string) => Promise<void>
}

export function EditableRow({ employee_info, setEdit, handleServerData }: IEdiableRowProps) {
    const { employee, handle } = useEmployee(employee_info);
    
    function handleCheck(day: string): boolean {
        switch (day) {
            case "Monday":
                return employee.work_days.Monday;
            case "Tusday":
                return employee.work_days.Tusday;
            case "Wednsday":
                return employee.work_days.Wednsday;
            case "Thursday":
                return employee.work_days.Thursday;
            case "Friday":
                return employee.work_days.Friday;
            case "Saturday":
                return employee.work_days.Saturday;
            case "Sunday":
                return employee.work_days.Sunday
            default:
                return false;
        }
    }

    return (
        <tr> 
            <td>
                <input
                    type = "text"
                    placeholder = {employee.first_name}
                    id = 'first_name'
                    onChange = {handle}
                ></input>
            </td>
            <td>
                <input
                    type = "text"
                    placeholder = {employee.last_name}
                    id = 'last_name'
                    onChange = {handle}
                ></input>
            </td>
            <td>{employee.id}</td>
            <td>
                {days_of_the_week.map((day) => 
                    <div key = {day}>{day}
                        <input
                            type = "checkbox"
                            onChange = {handle}
                            defaultChecked = {handleCheck(day)}
                            id = {day}
                        ></input>
                    </div>
                )}
            </td>
            <td>
                <input
                    type = "text"
                    placeholder = {employee.holiday}
                    id = 'holidy'
                    onChange = {handle}
                ></input>
            </td>
            <td>
                <button 
                type = "button"
                onClick = {() => handleServerData(({
                    employee_info: employee_info,
                    update: employee
                }), 
                'update')}
                >save</button>
            </td>
            <td>
                <button 
                type = 'button' 
                onClick = {() => setEdit(-1)}
                >cancel</button>
            </td>
        </tr>
    )
}