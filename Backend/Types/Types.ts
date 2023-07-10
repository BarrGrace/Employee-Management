export type days = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];

export type howManyEmplyees = [number, number, number, number, number, number, number];

export type status = {
    "work_days" : days,
    "first_name" : string, 
    "last_name" : string
}

export type employee_data = {
    first_name: string,
    last_name: string,
    id: number,
    work_days: {
        Monday: boolean,
        Tusday: boolean,
        Wednsday: boolean,
        Thursday: boolean,
        Friday: boolean,
        Saturday: boolean,
        Sunday: boolean
    }
    holiday: string
}

export type data_function = (employee: employee_data) => void;