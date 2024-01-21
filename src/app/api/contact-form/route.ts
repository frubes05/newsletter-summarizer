import mysql from 'mysql2/promise';

const connectionParams = {
    host: process.env.HOST,
    port: Number(process.env.SQL_PORT),
    user: process.env.SQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}

export async function POST(req: Request) {
  try {
    const { name, title, suggestion } = await req.json();

    const connection = await mysql.createConnection(connectionParams);

    const createFeedbacksQuery = `
      CREATE TABLE IF NOT EXISTS feedbacks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        suggestion TEXT NOT NULL
      )
    `;

    await connection.query(createFeedbacksQuery);

    const insertQuery = `INSERT INTO feedbacks (title, name, suggestion) VALUES (?, ?, ?)`;

    await connection.execute(insertQuery, [title, name, suggestion]);

    await connection.end();

    return Response.json({ message: "Successfully added new Feedback"})
  } catch (error: any) {
    throw new Error(error.message);
  }
}
