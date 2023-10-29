import express from "express";
import cors from "cors";

import { adminRouter } from "./admin/adminRouter";
import { dataRouter } from "./data/dataRouter";

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRouter)
app.use("/api/data", dataRouter)

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});