import pool from '../utils/pool';

export default class PokeModel {
  id;
  name;
  url;

  constructor(row) {
    this.id = row.id;
    this.pokeName = row.poke_name;
    this.url = row.url;
  }

  static async insert({ pokeName, url }) {
    const { rows } = await pool.query(
      'INSERT INTO pokemon (poke_name, url) VALUES ($1, $2) RETURNING *',
      [pokeName, url]
    );

    return new PokeModel(rows[0]);
  }
}
