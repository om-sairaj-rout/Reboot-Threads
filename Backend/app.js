const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const submitQuotationRouter = require("./routes/submitQuotation.routes");

dotenv.config();

const app = express();

app.use(cookieParser()); 
app.use(cors({
  origin: ["http://localhost:5173",'http://localhost:3000','https://reboot-threads.vercel.app'], 
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", submitQuotationRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
