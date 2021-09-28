import pool from '../utils/pool';

export default class PatchByIdModel {
  // id;
  // pokeName;
  // url;

  constructor(row) {
    this.id = row.id;
    this.pokeName = row.poke_name;
    this.url = row.url_url;
  }

  static async byId(id, pokeName) {
    const { rows } = await pool.query(
      'UPDATE pokemon SET poke_name = $2 WHERE id = $1 RETURNING *;',
      [id, pokeName]
    );

    return new PatchByIdModel(rows[0]);
  }
}
