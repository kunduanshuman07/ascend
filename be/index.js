import Express, { json, urlencoded } from "express";
import http from "http";
import { config } from "dotenv";
import cors from 'cors'
import { logger } from "./logger.js";
import ascendRoutes from "./routes/index.js";

const app = Express();
const server = http.createServer(app);
config();
const PORT = process.env.PORT || 5000;



app.use(json());
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));

app.use('/ascend', ascendRoutes);

server.listen(PORT, () => {
    console.log('Backend server started on PORT', PORT);
});





