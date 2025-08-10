import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import oauthRoutes from "./routes/oauth.js";
import previewRoutes from "./routes/preview.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", oauthRoutes);
app.use("/preview", previewRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT || 5000}`)
);