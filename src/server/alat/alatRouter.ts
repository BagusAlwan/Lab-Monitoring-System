import express, { request } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as AlatService from "./alat.service"

export const alatRouter = express.Router();

//GET ALL
alatRouter.get("/", async (request: Request, reponse: Response) => {
    try {
        const alats = await AlatService.listAlats()
        return reponse.status(200).json(alats)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET UNIQUE
alatRouter.get("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
        const alat = await AlatService.getAlat(id)
        if (alat) {
            return reponse.status(200).json(alat)
        }
        return reponse.status(404).json("no alat");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET per Lab
alatRouter.get("/group/:lab", async (request: Request, reponse: Response) => {
    const lab: string = request.params.lab;
    try {
        const alat = await AlatService.getAlatLab(lab)
        if (alat) {
            return reponse.status(200).json(alat)
        }
        return reponse.status(404).json("no alat");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

alatRouter.get("/group/:lab/:startDate/:endDate", async (request: Request, reponse: Response) => {
    const lab: string = request.params.lab;
    const startDateString: string = request.params.startDate;
    const endDateString: string = request.params.endDate;

    const startDate: Date = new Date(startDateString);
    const endDate: Date = new Date(endDateString);
    try {
        const alat = await AlatService.filterAlatLab(lab, startDate, endDate)
        if (alat) {
            return reponse.status(200).json(alat)
        }
        return reponse.status(404).json("no alat");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET per Alat
alatRouter.get("/chart/:alat", async (request: Request, reponse: Response) => {
    const alat: string = request.params.alat;
    try {
        const alats = await AlatService.getAlatalat(alat)
        if (alats) {
            return reponse.status(200).json(alats)
        }
        return reponse.status(404).json("no alat");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//POST
alatRouter.post("/", body("name").isString(), body("nim").isString(), body("lab").isString(), body("time"), body("alat").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    try {
        const alat = request.body
        const newAlat = await AlatService.createAlat(alat)
        return reponse.status(201).json(true)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//PUT - update
alatRouter.put("/:id", body("name").isString(), body("nim").isString(), body("lab").isString(), body("time").isString(), body("alat").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    const id: number = parseInt(request.params.id, 10)
    try {
        const alat = request.body
        const updatedAlat = await AlatService.upadateAlat(alat, id)
        return reponse.status(201).json(updatedAlat)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//DELETE
alatRouter.delete("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        await AlatService.deleteAlat(id)
        return reponse.status(201).json("Deleted")
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

