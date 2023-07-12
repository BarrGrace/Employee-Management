import { days_of_the_week } from "../Data/data";
import { useEmployee } from "../Hooks/useEmployee";

export function AddEmployee() {
    const { employee, handle } = useEmployee({
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
        holiday: {
            start: null,
            end: null
        }
    });

    async function sendInfo(){
        const send_data = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(employee)
        }

        await fetch('http://localhost:3333', send_data)
        .catch(error => console.log(error));
    }

    return (
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1 style = {{marginBottom: "40px"}}>Add Employee</h1>
        <form className = "p-3 mb-2 bg-secondary text-white" style = {{width: "700px"}} onSubmit = {sendInfo}>
            <label>First Name:</label><br/>
            <input 
                onChange = {handle} 
                id = "first_name" 
                value = {employee.first_name}
            /><br/><br/>
            <label>Last Name:</label><br/>
            <input 
                onChange = {handle} 
                id = "last_name" 
                value = {employee.last_name}
            /><br/><br/>
            <label>Days of Work:</label><br/>
            {
                days_of_the_week.map((day) =>
                    <div key = {day} style = {{display: "contents"}}>
                    {day}
                    <input 
                        type = "checkbox" 
                        style = {{marginRight: "15px", marginLeft: "5px"}} 
                        onChange = {handle} 
                        id = {day}/>
                    </div>
                )
            }
            <br/><br/>
            <center><input type = "submit"/></center>
        </form>
        </div>
    )
}