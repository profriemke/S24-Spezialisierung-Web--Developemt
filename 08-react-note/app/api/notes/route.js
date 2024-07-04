import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export async function GET(request) {
    //  const newNote = await prisma.note.create({text: "neue Notiz"})
    const notes = await prisma.note.findMany()
    return NextResponse.json(notes)
}

export async function POST(request) {
    const note = await request.json()
    console.log(note)
    const newNote = await prisma.note.create({ data: note })
    const notes = await prisma.note.findMany()
    return NextResponse.json(notes)

}