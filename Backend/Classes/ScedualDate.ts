export class ScedualDate {
    #day : number;
    #month : number;
    #year : number;
    #day_of_the_week : number;

    constructor(date : Date) {
        this.#day = date.getUTCDate();
        this.#month = date.getUTCMonth() + 1;
        this.#year = date.getUTCFullYear();
        this.#day_of_the_week = date.getDay();
    }

    getDayOfTheWeek() {
        return this.#day_of_the_week;
    }

    getDay() {
        return this.#day;
    }

    getMonth() {
        return this.#month;
    }

    getYear() {
        return this.#year;
    }

    getDate() : string {
        return [this.#day, "/", this.#month, "/", this.#year].join("");
    }

    is_less_equal(date : ScedualDate) : boolean {
        return this.#year <= date.getYear() && this.#month <= date.getMonth() && this.#day <= date.getDay();
    }
    
    equal(date : ScedualDate) : boolean {
        return this.#year === date.getYear() && this.#month === date.getMonth() && this.#day === date.getDay();
    }

    tomorrow() {
        this.#day_of_the_week = (this.#day_of_the_week + 1) % 7;

        if (this.#day === 31 && this.#month === 12) {
            this.#day = 1;
            this.#month = 1;
            this.#year = this.#year + 1;
            return
        }

        const date = new Date(this.#year, this.#month - 1, this.#day, 1, 1, 1, 1);
        date.setDate(date.getDate() + 1);

        this.#day = date.getDate();
        this.#day === 1 ? this.#month = date.getUTCMonth() + 2 : this.#month = date.getUTCMonth() + 1;
        this.#year = date.getFullYear();
    }
}