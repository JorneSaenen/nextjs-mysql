import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: process.env.SQL_ENDPOINT,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
  },
});

export async function sql_query(query_string, values = []) {
  try {
    const results = await db.query(query_string, values);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}
