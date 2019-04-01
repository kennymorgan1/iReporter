import { Client } from 'pg';
import dotenv from 'dotenv';
import incidents from '../models/data';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
client.connect().then(() => console.log('connected')).catch(err => console.log(err));

const RedFlagControllers = {

  async getAllRedFlags(req, res) {
    const sql = 'SELECT * FROM records';
    try {
      const { rows } = await client.query(sql);
      return res.status(200).json({
        status: 200,
        result: rows,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getRedFlagById(req, res) {
    const sql = 'SELECT * FROM records WHERE id = $1';
    const params = [req.params.id];
    try {
      const { rows } = await client.query(sql, params);
      if (!rows[0]) {
        return res.status(404).json({
          status: 404,
          error: 'red-flag not found',
        });
      }
      return res.status(200).json({
        status: 200,
        result: rows[0],
      });
    } catch (error) {
      return error;
    }
  },

  async createRedFlag(req, res) {
    const sql = 'INSERT INTO records (createdon, createdby, type, location, status, images, videos, comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

    const {
      location, images, videos, comment,
    } = req.body;
    const createdon = new Date();
    const createdby = Math.floor((Math.random() * 5) + 1);
    const type = 'red-flag';
    const status = 'under investigation';

    const params = [
      createdon, createdby, type, location, status, images, videos, comment,
    ];
    // new Date(),
    // Math.floor((Math.random() * 5) + 1),
    // 'red-flag',
    // location,
    // 'under investigation',
    // '[Images, Images]',
    // '[Images, Images]',
    // comment,
    try {
      const { rows } = await client.query(sql, params);
      console.log(rows[0]);
      return res.status(201).json({
        status: 201,
        result: req.body,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 400,
        error,
      });
    }
  },

  async updateRedFlagLocation(req, res) {
    const incident = incidents.find(singleData => singleData.id === parseFloat(req.params.id));

    incident.location = req.body.location;
    const data = {
      id: incident.id,
      message: 'Updated red-flag record\'s location',
    };
    return res.status(200).json({ status: 200, data });
  },

  async updateRedFlagComment(req, res) {
    const incident = incidents.find(singleData => singleData.id === parseFloat(req.params.id));

    incident.comment = req.body.comment;
    const data = {
      id: incident.id,
      message: 'Updated red-flag record\'s comment',
    };
    return res.status(200).json({ status: 200, data });
  },

  async deleteRedFlag(req, res) {
    const incident = incidents.find(singleData => singleData.id === parseFloat(req.params.id));

    const index = incidents.indexOf(incident);
    incidents.splice(index, 1);

    const data = {
      id: incident.id,
      message: 'red-flag record has been deleted',
    };
    return res.status(200).json({ status: 200, data });
  },
};

export default RedFlagControllers;
