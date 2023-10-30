import { db } from "../utils/db.server";

type Data = {
    id: number;
    name: string;
    nim: string;
    lab: string;
}

export const listDatas = async (): Promise<Data[]> => {
    return db.rPLDdata.findMany({
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
        },
    });
};

export const getData = async (id: number): Promise<Data | null> => {
    return db.rPLDdata.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true
        },
    });
};

export const getDataLab = async (lab: string): Promise<Data[] | null> => {
    return db.rPLDdata.findMany({
        where: {
            lab,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true
        },
    })
}

export const createData = async (data: Omit<Data, 'id'>): Promise<Data> => {
    const { name, nim, lab } = data;
    return db.rPLDdata.create({
        data: {
            name,
            nim,
            lab
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true
        }
    })
}

export const upadateData = async (data: Omit<Data, 'id'>, id: number): Promise<Data> => {
    const { name, nim, lab } = data;
    return db.rPLDdata.update({
        where: {
            id,
        },
        data: {
            name,
            nim,
            lab
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
        }
    })
}

export const deleteData = async (id: number): Promise<void> => {
    await db.rPLDdata.delete({
        where: {
            id,
        },
    });
};

