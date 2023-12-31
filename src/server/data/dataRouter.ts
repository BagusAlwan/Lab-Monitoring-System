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

//Verification
dataRouter.get("/verify/:name/:nim/:lab", async (request, response) => {
    const name = request.params.name;
    const nim = request.params.nim;
    const lab = request.params.lab;

    try {
        const dataExists = await DataService.checkVerify(name, nim, lab);

        if (dataExists) {
            return response.status(200).json(true);
        } else {
            return response.status(404).json({ message: "Data not found in the database" });
        }
    } catch (err) {
        return response.status(500).json({ message: "An error occurred while verifying data" });
    }
});

//POST
dataRouter.post("/", body("name").isString(), body("nim").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    try {
        const data = request.body
        const newData = await DataService.createData(data)
        return reponse.status(201).json(true)
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