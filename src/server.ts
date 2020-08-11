import './config/environment';
import express from 'express';
import cors from 'cors';

import { sequelize } from './config/database';
import Routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

const { PORT = 3500 } = process.env;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    sequelize.authenticate();
});
