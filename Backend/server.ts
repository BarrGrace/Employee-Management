import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { employee_data } from './Types/Types';
const app: Express = express();
const port = 3333;
const Datastore = require('nedb');
app.use(cors());
app.use(express.json({limit: '1mb'}));
const data_base = new Datastore('data_base.db');
data_base.loadDatabase();

app.post("/", (req: Request, res: Response) => {
    const data = req.body;
    data_base.insert(data);

    res.json({
        status: "Success"
    })
})

app.post("/update", (req: Request, res: Response) => {
    const data = req.body;
    data_base.update(
        {id: data.employee_info.id},
        {
            first_name: data.update.first_name,
            last_name: data.update.last_name,
            id: data.employee_info.id,
            work_days: data.update.work_days,
            holiday: data.update.holiday
        },
        {},
        (() => console.log('employee has been updated'))
    )
    console.log("holiday", data.update.holiday)
    res.json({
        status: 'Success'
    })
})

app.post('/delete', (req: Request, res: Response) => {
    const data = req.body;

    data_base.remove(
        {id: data.id},
        {multi: true},
        (() => console.log('employee ahs been removed'))
    );

    res.json({
        status: 'Success'
    });
})

app.get('/Employees', (req: Request, res: Response) => {
    data_base.find({}, (err: Error, data: employee_data) => {
        if (err) {
            res.end();
            return
        }
        console.log("data:", data)
        res.json(data);
    })
})

app.listen(port, () => {
    console.log("Server is running at: http://localhost:", port);
})