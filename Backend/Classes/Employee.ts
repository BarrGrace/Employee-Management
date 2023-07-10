import {status, days, howManyEmplyees} from "../Types/Types";
import { ScedualDate } from "./ScedualDate";

export class Employees {
    #employees : Map<number, status> = new Map<number,  status>();
    #scedual : Map<string, number[]> = new Map<string, number[]>();
    #how_many_employees : howManyEmplyees = [0, 0, 0, 0, 0, 0, 0];

    addEmpolyee(id : number, work_days : days, first_name : string, last_name : string) : void{
        this.#employees.set(id, {"work_days" : work_days, "first_name" : first_name, "last_name" : last_name});

        work_days[0] ? this.#how_many_employees[0]++ : "do nothing";
        work_days[1] ? this.#how_many_employees[1]++ : "do nothing";
        work_days[2] ? this.#how_many_employees[2]++ : "do nothing";
        work_days[3] ? this.#how_many_employees[3]++ : "do nothing";
        work_days[4] ? this.#how_many_employees[4]++ : "do nothing";
        work_days[5] ? this.#how_many_employees[5]++ : "do nothing";
        work_days[6] ? this.#how_many_employees[6]++ : "do nothing";
    }

    getEmployee(id : number) : status | undefined {
        return this.#employees.get(id);
    }

    getHowManyEmployees() : howManyEmplyees {
        return this.#how_many_employees;
    }

    setHoliday(id : number, start_date : ScedualDate, end_date : ScedualDate) {
        while (start_date.is_less_equal(end_date)) {
            let today = start_date.getDate();
            console.log(today)
            if (this.#employees.get(id)?.work_days[start_date.getDayOfTheWeek()]) {
                if (!this.#scedual.get(today)) this.#scedual.set(today, []);
                this.#scedual.get(today)?.push(id);
            }
            start_date.tomorrow();
        }
    }

    getHolidayScedual(date : string) : number[] | undefined {
        return this.#scedual.get(date);
    }

    getHowManyWorkers(day_of_the_week : number) : number {
        return this.#how_many_employees[day_of_the_week];
    }

    getScedualPlan() : void {
        let today = new ScedualDate(new Date());
        for (let i = 0; i < 14; i++) {
            let number_of_people_on_holiday = this.#scedual.get(today.getDate())?.length
            console.log("Date:", today.getDate());
            console.log("Number of people on holiday:", number_of_people_on_holiday === undefined ? 0 : number_of_people_on_holiday);
            console.log("How many employees suppose to work:", this.#how_many_employees[today.getDayOfTheWeek()]);
            today.tomorrow();
        }
    }
}