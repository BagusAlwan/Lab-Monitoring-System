import { db } from "../utils/db.server";

type Alat = {
    id: number;
    name: string;
    nim: string;
    lab: string;
    time: Date;
    alat: string;
}

export const listAlats = async (): Promise<Alat[]> => {
    return db.rPLDalat.findMany({
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true,
            alat: true,
        },
    });
};

export const getAlat = async (id: number): Promise<Alat | null> => {
    return db.rPLDalat.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true,
            alat: true,
        },
    });
};

export const getAlatLab = async (lab: string): Promise<Alat[] | null> => {
    return db.rPLDalat.findMany({
        where: {
            lab,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true,
            alat: true,
        },
    })
}

export const getAlatalat = async (alat: string): Promise<Alat[] | null> => {
    return db.rPLDalat.findMany({
        where: {
            alat,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true,
            alat: true,
        },
    })
}

export const createAlat = async (alats: Omit<Alat, 'id'>): Promise<Alat> => {
    const { name, nim, lab, time, alat } = alats;
    return db.rPLDalat.create({
        data: {
            name,
            nim,
            lab,
            time,
            alat
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true,
            alat: true,
        }
    })
}

export const upadateAlat = async (alats: Omit<Alat, 'id'>, id: number): Promise<Alat> => {
    const { name, nim, lab, time, alat } = alats;
    return db.rPLDalat.update({
        where: {
            id,
        },
        data: {
            name,
            nim,
            lab,
            time,
            alat
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true,
            alat: true,
        }
    })
}

export const deleteAlat = async (id: number): Promise<void> => {
    await db.rPLDalat.delete({
        where: {
            id,
        },
    });
};

