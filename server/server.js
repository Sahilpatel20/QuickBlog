import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('api is running');
});
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);


// running on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server running on port :' + PORT);
});

export default app;
