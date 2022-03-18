import express from "express";
import router from "./router";
import { engine } from "express-edge";

const app = express();
const port = 3000;

app.use(express.json());

//express body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.static("assets"));

app.use(engine);
app.set("views", `${__dirname}/pages`);

//router
app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
