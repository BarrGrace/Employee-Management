import { createContext } from "react";
import { employee_data } from "../../../Backend/Types/Types";

const employee: employee_data = {
    first_name: "",
    last_name: "",
    id: Date.now(),
    work_days: {
        Monday: false,
        Tusday: false,
        Wednsday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
    },
    holiday: ""
}

const setEmployee = (employee: employee_data) => Promise<void>;
export const employeeContext = createContext({employee, setEmployee});