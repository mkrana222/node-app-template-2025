const config = {
  env: process.env.NODE_ENV || "development",
  debug: process.env.APP_DEBUG === "true",
  port: parseInt(process.env.PORT || "3000"),
  getDbConfig: (env: "development" | "test" | "production") => {
    const dbConfigs = {
      development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
      },
      test: {
        database: process.env.TEST_DB_NAME,
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        host: process.env.TEST_DB_HOST,
        port: process.env.TEST_DB_PORT,
      },
      production: {
        database: process.env.PROD_DB_NAME,
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
      },
    };
    return dbConfigs[env];
  },
};

export default config;
