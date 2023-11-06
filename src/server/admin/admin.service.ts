import { db } from "../utils/db.server";

type Admin = {
    id: number;
    name: string;
    password: string;
}

export const listAdmins = async (): Promise<Admin[]> => {
    return db.adminUser.findMany({
        select: {
            id: true,
            name: true,
            password: true
        },
    });
};

export const getAdmin = async (name: string): Promise<Admin | null> => {
    return db.adminUser.findUnique({
        where: {
            name,
        },
        select: {
            id: true,
            name: true,
            password: true
        },
    });
};

export const createAdmin = async (admin: Omit<Admin, 'id'>): Promise<Admin> => {
    const { name, password } = admin;
    return db.adminUser.create({
        data: {
            name,
            password,
        },
        select: {
            id: true,
            name: true,
            password: true
        }
    })
}

export const upadateAdmin = async (admin: Omit<Admin, 'id'>, id: number): Promise<Admin> => {
    const { name, password } = admin;
    return db.adminUser.update({
        where: {
            id,
        },
        data: {
            name,
            password,
        },
        select: {
            id: true,
            name: true,
            password: true
        }
    })
}

export const deleteAdmin = async (id: number): Promise<void> => {
    await db.adminUser.delete({
        where: {
            id,
        },
    });
};

