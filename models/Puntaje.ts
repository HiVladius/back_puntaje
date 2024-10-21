import { Schema } from 'mongoose';

import mongoose from 'mongoose';

const puntajeSchema = new Schema({
    equipo: String,
    puntos: Number,
})


export const Puntaje = mongoose.model("Puntaje", puntajeSchema);


