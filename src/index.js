import express from "express";
import env from "dotenv";
import { engine } from "express-handlebars";
import page_route from "./routes/page_routes";
env.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

// view engine
app.set("views", "./src/views");
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: "./src/views/layouts",
    defaultLayout: "main.handlebars",
    partialsDir: "./src/views/components",
  })
);

// routes
// app.get("/", (req, res) => {
//   res.render("index.handlebars");
// });
app.use(page_route);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
