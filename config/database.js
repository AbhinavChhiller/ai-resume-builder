    // // strapi-api/config/database.js
    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       host: env('DATABASE_HOST', 'localhost'),
    //       port: env.int('DATABASE_PORT', 5432),
    //       database: env('DATABASE_NAME', 'ai_resume_builder'),
    //       user: env('DATABASE_USERNAME', 'postgres'),
    //       password: env('DATABASE_PASSWORD', 'Black@#123'),
    //       schema: env('DATABASE_SCHEMA', 'public'), // Not required
    //       ssl: false,
    //       // ssl: {
    //       //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
    //       // },
    //     },
    //     debug: false,
    //   },
    // });
// config/database.js

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       connectionString: env('DATABASE_URL'),
//       ssl: env.bool('DATABASE_SSL', true)
//         ? { rejectUnauthorized: false }
//         : false,
//     },
//   },
// });

// config/database.js
// config/database.js


module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  if (databaseUrl) {
    // Preferred: Single connection string (Render style)
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: databaseUrl,
          ssl: env.bool('DATABASE_SSL', true)
            ? { rejectUnauthorized: false }
            : false,
        },
      },
    };
  }

  // Fallback: Separate env vars (local/dev style)
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ai_resume_builder'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'postgres'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      debug: false,
    },
  };
};
