import * as dotenv from 'dotenv';

class Config {
  port: number;
  mongoUrl: string;
  dbName: string;

  constructor() {
    dotenv.config();
    this.port = parseInt(process.env.PORT);
    this.mongoUrl = process.env.MONGO_URL;
    this.dbName = process.env.DB_NAME;
  }
}

export default new Config();
