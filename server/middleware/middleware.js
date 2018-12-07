import { validationResult } from 'express-validator/check';
import datas from '../data/data';

class Middlewares {
  static notFound(req, res, next) {
    const data = datas.find(singleData => singleData.id === parseFloat(req.params.id));
    if (!data) {
      res.status(404).json({ status: 404, error: 'No red-flag with the given id' });
    } else {
      next();
    }
  }

  static isEmpty(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ status: 400, errors: errors.array().map(error => error.msg) });
    } else {
      next();
    }
  }
}

export default Middlewares;
