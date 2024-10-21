import express from "express";
import cors from "cors";


import { Puntaje } from "./models/Puntaje.ts";
import { connectDB } from "./db/configuration.ts";

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/puntajes", async (req:any, res:any) => {
  try {
    const puntajes = await Puntaje.find();
    res.json(puntajes);
  } catch (error) {
    console.error("Error al obtener puntajes", error);
    res.status(500).json({ error: "Error al obtener puntajes" });
  }
});

app.post("/api/puntajes", async (req:any, res:any) => {
  const { equipo, puntos } = req.body;
  try {
    let puntaje = await Puntaje.findOne({ equipo });
    if (puntaje) {
      puntaje.puntos = puntos;
    } else {
      puntaje = new Puntaje({ equipo, puntos });
    }
    await puntaje.save();
    res.status(201).json(puntaje);
  } catch (error) {
    console.error("Error al guardar puntaje", error);
    res.status(500).json({ error: "Error al guardar puntaje" });
  }
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
