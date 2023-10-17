import express from 'express'; 
import memberRouter from './member-routes.mjs';
import cors from 'cors'; 

const app = express(); 
app.use(express.json());
app.use(cors());

app.use('/', memberRouter)

const port = process.env.PORT || 8080; 
app.listen(port, () => console.log(`Server on port: ${port}`));