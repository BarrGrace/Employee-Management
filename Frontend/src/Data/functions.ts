import { employee_data, data_function } from "../../../Backend/Types/Types"
import { ChangeEvent } from "react"

export function handle(e : ChangeEvent<HTMLInputElement>, data: employee_data, setData: data_function){
    if (e.target.type === "checkbox") {
        setData({
            ...data,
            work_days: { 
                ...data.work_days,
                [e.target.id]: e.target.checked
            }
        })
        return
    }

    setData({
        ...data,
        [e.target.id]: e.target.value
    })
}
// export async function sendInfo(data: employee_data, where_to_send_data: string){
//     const send_data = {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     const url = 'http://localhost:3333' + where_to_send_data;

//     await fetch(url, send_data)
//     .catch(error => console.log(error));
// }