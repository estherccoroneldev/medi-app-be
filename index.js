import { express } from 'express';
import {pkg} from 'body-parser';
import {router} from './router/router.js';

const app = express(); // create express app
const { json, urlencoded } = pkg; // get json and urlencoded middleware

app.use(json()); // use json middleware
app.use(urlencoded({ extended: true })); // use urlencoded middleware

app.listen(3000, () => {
    console.log('Server is running on port 3000'); // log success message
});

app.use('/', router); // use router middleware
