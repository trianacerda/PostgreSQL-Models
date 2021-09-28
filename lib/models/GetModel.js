import pool from '../utils/pool';

export default class GetModel {
  // id;
  // pokeName;
  // url;

  constructor(row) {
    this.id = row.id;
    this.pokeName = row.poke_name;
    this.url = row.url_url;
  }

  static async insert({ name, url }) {
    const { rows } = await pool.query(
      'INSERT INTO pokemon (poke_name, url_url) VALUES ($1, $2) RETURNING *',
      [name, url]
    );

    return new GetModel(rows[0]);
  }
}
