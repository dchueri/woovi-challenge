import { useServer } from 'graphql-ws/lib/use/ws';
import { createServer } from 'http';
import ws from 'ws';
import app from './app';
import { connectDatabase } from './database';
import { schema } from './schema';

(async () => {
  await connectDatabase();

  const server = createServer(app.callback());

  server.listen(process.env.PORT, () => {
    console.log(`server running on port :${process.env.PORT}`);
  });
  const graphqlWs = new ws.Server({ server });
  useServer({ schema }, graphqlWs);
})();
