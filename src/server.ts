import app from "./app";
import config from "./config";

// const port = 5000;
const port = config.port;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
