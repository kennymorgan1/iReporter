import Joi from 'joi';
import datas from '../data/data';


class IncidentControllers {
  static getAllRedFlags(req, res) {
    return res.status(200).json({ status: 200, datas });
  }

  static createRedFlag(req, res) {
    const schema = {
      location: Joi.string().min(5).required(),
      comment: Joi.string().min(5).required(),
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).json({ status: 400, error: result.error.details[0].message });
    }
    const id = datas.length + 1;
    const incident = {
      id,
      createdOn: Date(),
      createdBy: Math.floor((Math.random() * 5) + 1),
      type: 'red-flag',
      location: req.body.location,
      status: 'under investigation',
      Images: '[Images, Images]',
      Videos: '[Images, Images]',
      comment: req.body.comment,
    };
    datas.push(incident);
    const data = {
      id,
      message: 'created red-flag record',
    };
    return res.status(201).json({ status: 201, data });
  }
}

export default IncidentControllers;
