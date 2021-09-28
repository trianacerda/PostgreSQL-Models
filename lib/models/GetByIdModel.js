import pool from '../utils/pool';

export default class GetByIdModel {
  // id;
  // pokeName;
  // url;

  constructor(row) {
    this.id = row.id;
    this.pokeName = row.poke_name;
    this.url = row.url_url;
  }

  static async byId({ id }) {
    const { rows } = await pool.query('SELECT * FROM orders WHERE id = $1', [
      id,
    ]);

    return new GetByIdModel(rows[0]);
  }
}
