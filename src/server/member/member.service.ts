import { db } from "../utils/db.server";

type Member = {
    id: number;
    name: string;
    nim: string;
    lab: string;
    time: Date;
}

export const listMembers = async (): Promise<Member[]> => {
    return db.rPLDmember.findMany({
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true
        },
    });
};

export const getMember = async (id: number): Promise<Member | null> => {
    return db.rPLDmember.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true
        },
    });
};

export const getMemberLab = async (lab: string): Promise<Member[] | null> => {
    return db.rPLDmember.findMany({
        where: {
            lab,
        },
        select: {
            id: true,
            name: true,
            nim: true,
            lab: true,
            time: true
        },
    })
}

export const createMember = async (member: Omit<Member, 'id'>): Promise<Member> => {
    const { name, nim, lab } = member;
    return db.rPLDmember.create({
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
            time: true
        }
    })
}

export const upadateMember = async (member: Omit<Member, 'id'>, id: number): Promise<Member> => {
    const { name, nim, lab } = member;
    return db.rPLDmember.update({
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
            time: true
        }
    })
}

export const deleteMember = async (id: number): Promise<void> => {
    await db.rPLDmember.delete({
        where: {
            id,
        },
    });
};

