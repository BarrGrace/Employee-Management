import { useState, useEffect, Fragment } from "react";
import { employee_data } from '../../../Backend/Types/Types'
import Table from 'react-bootstrap/Table'
import { ReadOnlyRow } from "../Components/ReadOnlyRow";
import { EditableRow } from "../Components/EditableRow";

export function Employees() {
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(-1);
    
    useEffect(() => {
        getEmployees();
    }, [])

    async function getEmployees() {
        const res = await fetch("http://localhost:3333/Employees");
        const new_data =  await res.json();
        setData(new_data);
    }
    async function handleServerData(data: any, path: string){
        setEdit(-1);

        const send_data = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        }
        const url = 'http://localhost:3333/' + path;
        await fetch(url, send_data)
            .catch(error => console.log(error));

        getEmployees()
    }

    return (
        <div  style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style = {{marginBottom: "40px"}}>Employees</h1>
            <form>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Id</th>
                            <th>Work Days</th>
                            <th>Holiday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((employee: employee_data, index: number) => (
                            <Fragment key = {index}>
                            {edit === employee.id ? (
                                <EditableRow employee_info = {employee} setEdit = {setEdit} handleServerData = {handleServerData} />
                            ) : (
                                <ReadOnlyRow  employee = {employee} index = {index} setEdit = {setEdit} handleServerData = {handleServerData} />
                            )}
                            </Fragment>
                        ))}
                    </tbody>
                </Table>
            </form>
        </div>
    )
}