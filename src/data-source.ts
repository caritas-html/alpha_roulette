import 'reflect-metadata';
import { DataSource } from 'typeorm';

const postgresConfig = {
    host: "localhost",
    port: 5432,
    username: "adminleo",
    password: "1237",
    database: "db_roulette",
}
export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: 'postgres',
  synchronize: false,   
  logging: false,
  entities: ['src/entities/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscribers/**/*{.ts,.js}'],
});