import { env } from "./config/server-config.js";
import app from "./app.js";
import logger from "./logger/logger.js";

app.listen(env.PORT, () => {
  logger.info(`Server is running on port ${env.PORT}`);
});
