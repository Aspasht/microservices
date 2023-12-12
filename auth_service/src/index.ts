import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { connectToDatabase } from './db/db';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
const app = express();
app.use(cors());
app.use(helmet());


// Initializes database connection
connectToDatabase();


// connect-mongo and express session setup 
// storing user session on db

app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: { secure: true }
}))

// Initializing passportjs local-strategy

app.use(passport.initialize());
app.use(passport.session())


// Basic server setup
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json("This is auth service")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});