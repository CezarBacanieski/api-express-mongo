import express from "express";
import conectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conect = await conectDatabase();

conect.on("error", (erro) => {
  console.error("conection error", erro);
});

conect.once("open", () => {
  console.log("conection with de data succed");
});

const app = express();
routes(app);


export default app;
