import express from "express";
import cors from "cors";

import { adminRouter } from "./admin/adminRouter";
import { dataRouter } from "./data/dataRouter";
import { alatRouter } from "./alat/alatRouter";
import { memberRouter } from "./member/memberRouter";

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRouter)
app.use("/api/data", dataRouter)
app.use("/api/alat", alatRouter)
app.use("/api/member", memberRouter)

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});