import { db } from "../utils/db.server";

type alatData = {
    id: number;
    alat: string;
    lab: string;
}

export const listalatDatas = async (): Promise<alatData[]> => {
    return db.alatData.findMany({
        select: {
            id: true,
            alat: true,
            lab: true,
        },
    });
};

export const getalatData = async (id: number): Promise<alatData | null> => {
    return db.alatData.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            alat: true,
            lab: true,
        },
    });
};

export const getalatDataLab = async (lab: string): Promise<alatData[] | null> => {
    return db.alatData.findMany({
        where: {
            lab,
        },
        select: {
            id: true,
            alat: true,
            lab: true,
        },
    })
}

export const createalatData = async (alatData: Omit<alatData, 'id'>): Promise<alatData> => {
    const { alat, lab } = alatData;
    return db.alatData.create({
        data: {
            alat,
            lab
        },
        select: {
            id: true,
            alat: true,
            lab: true,
        }
    })
}

export const upadatealatData = async (alatData: Omit<alatData, 'id'>, id: number): Promise<alatData> => {
    const { alat, lab } = alatData;
    return db.alatData.update({
        where: {
            id,
        },
        data: {
            alat,
            lab
        },
        select: {
            id: true,
            alat: true,
            lab: true,
        }
    })
}

export const deletealatData = async (id: number): Promise<void> => {
    await db.alatData.delete({
        where: {
            id,
        },
    });
};

