import express, { request, response } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as DataService from "./data.service"

export const dataRouter = express.Router();

//GET ALL
dataRouter.get("/", async (request: Request, reponse: Response) => {
    try {
        const data = await DataService.listDatas()
        return reponse.status(200).json(data)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET UNIQUE
dataRouter.get("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
        const data = await DataService.getData(id)
        if (data) {
            return reponse.status(200).json(data)
        }
        return reponse.status(404).json("no data");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET per Lab
dataRouter.get("/group/:lab", async (request: Request, reponse: Response) => {
    const lab: string = request.params.lab;
    try {
        const data = await DataService.getDataLab(lab)
        if (data) {
            return reponse.status(200).json(data)
        }
        return reponse.status(404).json("no data");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//VERIFY
dataRouter.get("/verify", body("name").isString(), body("nim").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const { name, nim, lab } = request.body
    if (!name || !nim) {
        return response.status(400).json({ error: 'Both name and nim are required' });
    }
    try {
        const isDataValid = await DataService.verifyData(name, nim, lab);
        if (isDataValid) {
            response.status(200).json({ message: 'Data is valid' });
        } else {
            response.status(404).json({ error: 'Data is not valid or does not exist in the database' });
        }
    } catch (error) {
        response.status(500).json({ error: 'Internal server error' });
    }
})

//POST
dataRouter.post("/", body("name").isString(), body("nim").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    try {
        const data = request.body
        const newData = await DataService.createData(data)
        return reponse.status(201).json(newData)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//PUT - update
dataRouter.put("/:id", body("name").isString(), body("nim").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    const id: number = parseInt(request.params.id, 10)
    try {
        const data = request.body
        const updatedData = await DataService.upadateData(data, id)
        return reponse.status(201).json(updatedData)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//DELETE
dataRouter.delete("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        await DataService.deleteData(id)
        return reponse.status(201).json("Deleted")
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})