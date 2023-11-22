import express, { request, response } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as alatDataService from "./alatData.service"

export const alatDataRouter = express.Router();

//GET ALL
alatDataRouter.get("/", async (request: Request, reponse: Response) => {
    try {
        const alatData = await alatDataService.listalatDatas()
        return reponse.status(200).json(alatData)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET UNIQUE
alatDataRouter.get("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
        const alatData = await alatDataService.getalatData(id)
        if (alatData) {
            return reponse.status(200).json(alatData)
        }
        return reponse.status(404).json("no alatData");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET per Lab
alatDataRouter.get("/group/:lab", async (request: Request, reponse: Response) => {
    const lab: string = request.params.lab;
    try {
        const alatData = await alatDataService.getalatDataLab(lab)
        if (alatData) {
            return reponse.status(200).json(alatData)
        }
        return reponse.status(404).json("no alatData");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//POST
alatDataRouter.post("/", body("alat").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    try {
        const alatData = request.body
        const newalatData = await alatDataService.createalatData(alatData)
        return reponse.status(201).json(true)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//PUT - update
alatDataRouter.put("/:id", body("alat").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    const id: number = parseInt(request.params.id, 10)
    try {
        const alatData = request.body
        const updatedalatData = await alatDataService.upadatealatData(alatData, id)
        return reponse.status(201).json(updatedalatData)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//DELETE
alatDataRouter.delete("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        await alatDataService.deletealatData(id)
        return reponse.status(201).json("Deleted")
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})