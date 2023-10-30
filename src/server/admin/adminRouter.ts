import express, { request } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as AdminService from "./admin.service"

export const adminRouter = express.Router();

//GET ALL
adminRouter.get("/", async (request: Request, reponse: Response) => {
    try {
        const admins = await AdminService.listAdmins()
        return reponse.status(200).json(admins)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET UNIQUE
adminRouter.get("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
        const admin = await AdminService.getAdmin(id)
        if (admin) {
            return reponse.status(200).json(admin)
        }
        return reponse.status(404).json("no admin");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//POST
adminRouter.post("/", body("name").isString(), body("password").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    try {
        const admin = request.body
        const newAdmin = await AdminService.createAdmin(admin)
        return reponse.status(201).json(newAdmin)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//PUT - update
adminRouter.put("/:id", body("name").isString(), body("password").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    const id: number = parseInt(request.params.id, 10)
    try {
        const admin = request.body
        const updatedAdmin = await AdminService.upadateAdmin(admin, id)
        return reponse.status(201).json(updatedAdmin)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//DELETE
adminRouter.delete("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        await AdminService.deleteAdmin(id)
        return reponse.status(201).json("Deleted")
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})