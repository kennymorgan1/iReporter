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
    const {
      location, images, videos, comment,
    } = req.body;
    const createdOn = new Date();
    const createdBy = Math.floor((Math.random() * 5) + 1);
    const type = 'red-flag';
    const status = 'under investigation';

    const sql = `
    INSERT INTO records(createdOn, createdBy, type, location, status, images, videos, comment)
    VALUES ('${createdOn}', '${createdBy}', '${type}', '${location}', '${status}', ARRAY[${images}]::TEXT[], ARRAY[${videos}]::TEXT[], '${comment}')
    RETURNING *
  `;

    try {
      const { rows } = await client.query(sql);
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
    const location = req.body;
    const { id } = req.params;
    const fieldName = 'location';

    const sql = `UPDATE records SET ${fieldName} = '${location}'
    WHERE id = ${id}
    RETURNING *`;

    try {
      const { rows } = await client.query(sql);
      console.log(rows[0]);
      return res.status(200).json({
        status: 200,
        result: req.body,
        data: [{
          id,
          message: 'Updated red-flag record\'s location',
        }],
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 400,
        error,
      });
    }
  },

  async updateRedFlagComment(req, res) {
    const comment = req.body;
    const { id } = req.params;
    const fieldName = 'comment';

    const sql = `UPDATE records SET ${fieldName} = '${comment}'
    WHERE id = ${id}
    RETURNING *`;

    try {
      const { rows } = await client.query(sql);
      console.log(rows[0]);
      return res.status(200).json({
        status: 200,
        result: req.body,
        data: [{
          id,
          message: 'Updated red-flag record\'s comment',
        }],
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 400,
        error,
      });
    }
  },

  async deleteRedFlag(req, res) {
    const { id } = req.params;
    const sql = `
    DELETE FROM records
    WHERE id = ${Number(id)}
    RETURNING id
  `;

    try {
      const { rows } = await client.query(sql);
      console.log(rows[0]);
      return res.status(200).json({
        status: 200,
        result: req.body,
        data: [{
          id,
          message: 'Red-flag record has been deleted.',
        }],
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 400,
        error,
      });
    }
  },
};

export default RedFlagControllers;
