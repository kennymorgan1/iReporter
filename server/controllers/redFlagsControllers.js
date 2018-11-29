import Joi from 'joi';
import datas from '../data/data';


class IncidentControllers {
  static getAllRedFlags(req, res) {
    return res.status(200).json({ status: 200, datas });
  }

  static getRedFlagById(req, res) {
    const data = datas.find(c => c.id === parseFloat(req.params.id));
    if (!data) return res.json({ status: 404, error: 'No red-flag with the given id' });
    return res.status(200).json({ status: 200, data });
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

  static updateRedFlagLocation(req, res) {
    const incident = datas.find(c => c.id === parseFloat(req.params.id));
    if (!incident) return res.status(404).json({ status: 404, error: 'No red-flag with the given id' });
    const schema = {
      location: Joi.string().min(5).required(),
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).json({ status: 400, error: result.error.details[0].message });
    }
    incident.location = req.body.location;
    incident.comment = incident.comment;
    const id = parseFloat(req.params.id);
    const data = {
      id,
      message: 'updated red-flag record\'s location',
    };
    return res.status(201).json({ status: 201, data });
  }

  static updateRedFlagComment(req, res) {
    const incident = datas.find(c => c.id === parseFloat(req.params.id));
    if (!incident) return res.status(404).json({ status: 404, error: 'No red-flag with the given id' });
    const schema = {
      comment: Joi.string().min(5).required(),
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).json({ status: 400, error: result.error.details[0].message });
    }
    incident.comment = req.body.comment;
    const id = parseFloat(req.params.id);
    const data = {
      id,
      message: 'updated red-flag record\'s comment',
    };
    return res.status(201).json({ status: 201, data });
  }

  static deleteRedFlag(req, res) {
    const incident = datas.find(c => c.id === parseFloat(req.params.id));
    if (!incident) return res.status(404).json({ status: 404, error: 'No red-flag with the given id' });
    const index = datas.indexOf(incident);
    datas.splice(index, 1);
    const id = parseFloat(req.params.id);
    const data = {
      id,
      message: 'red-flag record has been deleted',
    };
    return res.json({ status: 201, data });
  }
}

export default IncidentControllers;
