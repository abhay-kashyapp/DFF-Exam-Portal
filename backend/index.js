import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from "./routes/authRouter.js";

const app = express();
app.use(express.json());
app.use(cookieParser())


// app.use('/', (req, res,next) => {
//     res.send('API is running...');
//     next()
// });
app.use('/api/auth', authRouter);






const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    db();
});