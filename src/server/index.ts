import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

import { adminRouter } from "./admin/adminRouter";
import { dataRouter } from "./data/dataRouter";
import { alatRouter } from "./alat/alatRouter";
import { memberRouter } from "./member/memberRouter";
import { getAdmin } from "./admin/admin.service";

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;
const app = express();

app.use(cors());
app.use(express.json());

interface UserData {
  id: number;
  name: string;
  password: string;
}

interface ValidationRequest extends Request {
  userData: UserData;
}

app.use("/api/admin/login/:name/:password", async (req, res) => {
  const { name, password } = req.params;

  const user = await getAdmin(name);

  if (!user) {
    return res.status(404).json({ message: "Admin not found" });
  }

  if (password === user.password) {
    const payload = {
      id: user.id,
      name: user.name,
      password: user.password,
    };

    console.log(payload);

    const secret = "zero";

    const expiresIn = 60 * 30;

    const token = jwt.sign(payload, secret, { expiresIn });

    return res.json({
      data: {
        id: user.id,
        name: user.name,
        password: user.password,
      },
      token: token,
    });
  } else {
    return res.status(403).json({ message: "Invalid password" });
  }
});

const accessValidation = (req: Request, res: Response, next: NextFunction) => {
  const validationReq = req as ValidationRequest;
  const authorization = req.headers['authorization'];

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Invalid or missing token' });
  }

  const token = authorization.split('Bearer ')[1];

  const secret = "zero";

  if (typeof token === 'string') {
    try {
      const jwtDecode = jwt.verify(token, secret);
      if (typeof jwtDecode !== 'string') {
        validationReq.userData = jwtDecode as UserData;
      }
    } catch (e) {
      if (typeof e === 'string') {
        console.error(e);
      } else if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error("An error occurred:", e);
      }
      return res.status(401).json({ message: 'unauthorized' });
    }
  } else {
    return res.status(401).json({ message: 'unauthorized' });
  }

  next();
}

app.use("/api/admin", accessValidation, adminRouter);
app.use("/api/data", dataRouter);
app.use("/api/alat", alatRouter);
app.use("/api/member", memberRouter);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});