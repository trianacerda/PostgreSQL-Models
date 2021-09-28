import pool from '../utils/pool';

export default class DeleteByIdModel {
  // id;
  // pokeName;
  // url;

  constructor(row) {
    this.id = row.id;
    this.pokeName = row.poke_name;
    this.url = row.url_url;
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM pokemon WHERE id = $1 RETURNING *',
      [id]
    );

    return new DeleteByIdModel(rows[0]);
  }
}
