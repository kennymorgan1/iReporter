import express from 'express';
import bodyParser from 'body-parser';
import redFlagsRoutes from './routes/redFlagsRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/red-flags', redFlagsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
export default app;
