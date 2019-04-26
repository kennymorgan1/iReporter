import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'babel-polyfill';
import chalk from 'chalk';
import redFlagsRoutes from './routes/routes';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers',
//   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   if( req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods',
//     'POST, PUT, PATCH, GET, DELETE');
//     return res.status(200).json({});
//   }
// });

app.get('/', (req, res) => {
  res.status(200).json({
    status: '200',
    message: 'Welcome to my API',
  });
});

app.use('/api/v1/red-flags', redFlagsRoutes);


app.use('*', (req, res) => {
  return res.status(404).json({ status: 404, error: 'Page not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk.default.yellow.bgBlack.bold(`Listening on port ${port}...`)));
export default app;
