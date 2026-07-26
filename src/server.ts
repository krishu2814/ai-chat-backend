import { env } from "./config/server-config.js";
import app from "./app.js";

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
