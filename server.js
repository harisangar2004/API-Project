import express from 'express';
import pino from 'pino';
import cors from 'cors'
import mainRoutes from './src/main.routes.js'; 
import userRoutes from './src/user.routes.js'
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

const app = express();
const port = 4000;

const limiter = rateLimit({
    windowMs: 60*100, //1 min
    max:100 // limit each IP to 100 requests per windowsMs time 
})

app.use(compression())
app.use(limiter);
app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
