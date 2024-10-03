import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Schema for Graduation date
const GraduationSchema = new Schema({
  date: { type: Date, required: true },
});

// Model
const Graduation = model('Graduation', GraduationSchema);

export default Graduation;
