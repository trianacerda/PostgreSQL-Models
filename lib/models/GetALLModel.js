import pool from '../utils/pool';

export default class GetModel {
  id;
  name;
  url;

  constructor(row) {
    this.id = row.id;
    this.name = row.poke_name;
    this.url = row.url_url;
  }

  static async insert(name, url) {
    console.log('name/url', name, url);
    const { rows } = await pool.query(
      'INSERT INTO pokemon (poke_name, url_url) VALUES ($1, $2) RETURNING *',
      [name, url]
    );

    return new GetModel(rows[0]);
  }

  static async getALL() {
    const { rows } = await pool.query('SELECT * FROM pokemon');
    // console.log('rows', rows);
    return rows.map((row) => new GetModel(row));
  }
}
