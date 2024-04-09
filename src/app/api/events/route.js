import { connectToDb } from "@/libs/connectToDb";
import { Event } from "@/libs/models";
import { NextResponse } from "next/server";
import React from "react";

export async function GET() {
  connectToDb();
  const events = await Event.find();
  return NextResponse.json({
    events,
  });
}

export async function POST(request, res) {
  if (request.method === "POST") {
    await connectToDb();
    try {
      const { title, description, date, place, img, alt } =
        await request.json();
      
      await Event.create({ title, description, date, place, img, alt });
      return NextResponse.json({ message: "Event created" }, { status: 201 });
    } catch (error) {
      console.log("Erreur lors du post d'un evennement", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la creation d'un event" });
    }
  } else {
    res
      .status(405)
      .json({ message: "Seule les requests POST sont autorisees" });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  connectToDb();
  await Event.findByIdAndDelete(id);
  return NextResponse.json({ message: "Event deleted" }, { status: 200 });
}
