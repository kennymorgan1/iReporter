import datas from '../models/data';


class RedFlagControllers {
  static getAllRedFlags(req, res) {
    const data = datas;
    return res.status(200).json({ status: 200, data });
  }

  static getRedFlagById(req, res) {
    const data = datas.find(singleData => singleData.id === parseFloat(req.params.id));
    return res.status(200).json({ status: 200, data });
  }

  static createRedFlag(req, res) {
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
      message: 'Created red-flag record',
    };
    return res.status(201).json({ status: 201, data });
  }

  static updateRedFlagLocation(req, res) {
    const incident = datas.find(singleData => singleData.id === parseFloat(req.params.id));

    incident.location = req.body.location;
    const data = {
      id: incident.id,
      message: 'Updated red-flag record\'s location',
    };
    return res.status(201).json({ status: 201, data });
  }

  static updateRedFlagComment(req, res) {
    const incident = datas.find(singleData => singleData.id === parseFloat(req.params.id));

    incident.comment = req.body.comment;
    const data = {
      id: incident.id,
      message: 'Updated red-flag record\'s comment',
    };
    return res.status(201).json({ status: 201, data });
  }

  static deleteRedFlag(req, res) {
    const incident = datas.find(singleData => singleData.id === parseFloat(req.params.id));

    const index = datas.indexOf(incident);
    datas.splice(index, 1);

    const data = {
      id: incident.id,
      message: 'red-flag record has been deleted',
    };
    return res.status(201).json({ status: 201, data });
  }
}

export default RedFlagControllers;
