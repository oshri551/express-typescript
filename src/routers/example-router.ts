import { Request, Response, NextFunction, Router } from 'express';
import { ExampleService } from '../services/example-service';

export class ExampleRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.createRoutes();
    }

    public static init(): Router {
        const exampleRouterInstance: ExampleRouter = new ExampleRouter();
        return exampleRouterInstance.router;
    }

    public createRoutes() {
        this.router.get('/example', (request: Request, response: Response, next: NextFunction) => {
            response.send(ExampleService.getExampleData());
        });
    }
}

// const exampleRouter = new ExampleRouter();

// export default exampleRouter.router;