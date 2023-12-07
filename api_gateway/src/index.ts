import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors());
app.use(helmet());



const authProxy = createProxyMiddleware({
    target: 'http://localhost:3001/',
    changeOrigin: true,
})


app.use('/', authProxy);


// Initializing server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});