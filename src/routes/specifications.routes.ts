import { response, Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
