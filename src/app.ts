import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as dotenv from 'dotenv';



// Load environment variables from .env file, where API keys and passwords are configured
const dotendResult = dotenv.config({path: '.env.dev'});
if (dotendResult.error) {
    console.log(dotendResult.error);
}

// Controllers import

// Routers import
import { ExampleRouter } from './routers/example-router';

// Create Express Server
const app = express();


// Express congigurations
app.set('port', process.env.PORT || 8080);

if (process.env.NODE_ENV !== 'dev') {
    app.set('views', path.join(__dirname, 'views'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Primary App routes
 */
app.use('', ExampleRouter.init());



// last route bust be serve the index.html


 // export app
 export default app;
