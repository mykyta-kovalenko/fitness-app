import { config } from './config/config';
import { app } from './config/express';

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
