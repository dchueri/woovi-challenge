import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import app from './app';
import { connectDatabase } from './database';
import { schema } from './schema';

const bootstrap = async () => {
  try {
    await connectDatabase();
  } catch (err) {
    console.error('Unable to connect to database!', err);
    process.exit(1);
  }

  const server = createServer(app.callback());

  server.listen(process.env.PORT, () => {
    console.log(`Running at port ${process.env.PORT}`);
  });

  const graphqlWs = new WebSocketServer({ server });
  useServer({ schema }, graphqlWs);
};

bootstrap();
