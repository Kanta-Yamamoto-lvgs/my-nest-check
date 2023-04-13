module.exports = [
  {
    name: 'default',
    type: "mysql",
    host: "mysql",
    port: 3306,
    username: "user",
    password: "password",
    database: "develop",
    synchronize: false,
    entities: ['src/database/entities/**/*entity.ts'],
    migrations: ['src/migration/*.ts'],
    "cli": {
      entitiesDir: 'src/entities',
      migrationsDir: "src/migration/"
    }
  }
]