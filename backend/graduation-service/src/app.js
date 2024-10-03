import express from 'express';
import cors from 'cors';
import graduationRoutes from './routes/graduationRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/graduation', graduationRoutes);

export default app;
