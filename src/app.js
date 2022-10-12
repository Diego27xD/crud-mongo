import express from "express";
import cors from "cors";
import { routes } from "./router";
import connect from "./db";
connect();
export const app = express();

app.use(cors());
app.use(express.json());
routes(app);
