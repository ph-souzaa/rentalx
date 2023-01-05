import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
    name: string,
    description: string,
}

class CreateSpecificationUseCase {

    constructor(private SpecificationsRepository : ISpecificationRepository){}

    execute({ name, description } : IRequest): void{

        const specificationAlReadyExists = this.SpecificationsRepository.findByName(name);

        if (specificationAlReadyExists){
            throw new Error("Specification already exists")
        }
        
        this.SpecificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };