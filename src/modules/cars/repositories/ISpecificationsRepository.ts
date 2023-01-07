import { Specifications } from "../entities/Specification";

interface ISpecificationDTO {
    name: string;
    description: string;
}
interface ISpecificationsRepository {
    create({ name, description }: ISpecificationDTO): Specifications;
    findByName(name: string): Specifications;
}

export { ISpecificationsRepository, ISpecificationDTO };