import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { connectToDatabase } from './db/db';

const app = express();
app.use(cors());
app.use(helmet());



// Initializes database connection
connectToDatabase();

const port = process.env.PORT

app.get('/', (req, res) => {
    res.json("This is auth service")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});