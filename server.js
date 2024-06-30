import express from 'express';

import mainRoutes from './src/main.routes.js'; 
import userRoutes from './src/user.routes.js'
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

const app = express();
const port = 3000;

const limiter = rateLimit({
    windowMs: 60*100,
    max:100
})

app.use(compression())
app.use(limiter);
app.use(express.json())
app.use(helmet())

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
