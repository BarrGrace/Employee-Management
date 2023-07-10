import { ChangeEvent, useState } from "react";
import { employee_data } from "../../../Backend/Types/Types";

export function useEmployee(employee_info: employee_data) {
    const [employee, setEmployee] = useState(employee_info);

    const handle = (e : ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "checkbox") {
            setEmployee({
                ...employee,
                work_days: {
                    ...employee.work_days,
                    [e.target.id]: e.target.checked
                }
            })
            return
        }

        setEmployee({
            ...employee,
            [e.target.id]: e.target.value
        })
    }

    return {
        employee,
        setEmployee,
        handle
    }
}