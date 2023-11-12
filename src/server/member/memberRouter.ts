import express, { request } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as MemberService from "./member.service"

export const memberRouter = express.Router();

//GET ALL
memberRouter.get("/", async (request: Request, reponse: Response) => {
    try {
        const member = await MemberService.listMembers()
        return reponse.status(200).json(member)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET UNIQUE
memberRouter.get("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10);
    try {
        const member = await MemberService.getMember(id)
        if (member) {
            return reponse.status(200).json(member)
        }
        return reponse.status(404).json("no member");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//GET per Lab
memberRouter.get("/group/:lab", async (request: Request, reponse: Response) => {
    const lab: string = request.params.lab;
    try {
        const member = await MemberService.getMemberLab(lab)
        if (member) {
            return reponse.status(200).json(member)
        }
        return reponse.status(404).json("no member");
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//POST
memberRouter.post("/", body("name").isString(), body("nim").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    try {
        const member = request.body
        const newMember = await MemberService.createMember(member)
        return reponse.status(201).json(true)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//PUT - update
memberRouter.put("/:id", body("name").isString(), body("nim").isString(), body("lab").isString(), async (request: Request, reponse: Response) => {
    const err = validationResult(request);
    if (!err.isEmpty()) {
        return reponse.status(400).json({ error: err.array() });
    }
    const id: number = parseInt(request.params.id, 10)
    try {
        const member = request.body
        const updatedMember = await MemberService.upadateMember(member, id)
        return reponse.status(201).json(updatedMember)
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})

//DELETE
memberRouter.delete("/:id", async (request: Request, reponse: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        await MemberService.deleteMember(id)
        return reponse.status(201).json("Deleted")
    } catch (err: any) {
        return reponse.status(500).json(err.message);
    }
})