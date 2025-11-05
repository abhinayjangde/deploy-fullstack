import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin: ["http://localhost:5173", "http://localhost:4000", "http://13.201.226.21:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/msg', (req, res) => {
    res.status(200).json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});