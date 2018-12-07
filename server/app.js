import express from 'express';
import bodyParser from 'body-parser';
import redFlagsRoutes from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my API' });
});

app.use('/api/v1/red-flags', redFlagsRoutes);


app.all('*', (req, res) => {
  return res.status(404).json({ status: 404, error: 'Page not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
export default app;
