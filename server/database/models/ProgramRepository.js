
class ProgramRepository {
    constructor(db) {
      this.db = db;
    }
  
    async readAll() {
      const [rows] = await this.db.query('SELECT * FROM program');
      return rows;
    }
  }
  // server/app/controllers/programActions.js

const tables = require('../../database/tables');

const browse = async (req, res) => {
  try {
    const programsFromDB = await tables.program.readAll();
    res.json(programsFromDB);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { browse };
  
  module.exports = ProgramRepository;