import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use(cors({
  origin: 'https://www.grapha.co',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());

//routes
import contactRouter from "./routes/contact.route.js";

app.use("/api", contactRouter);

export { app };
