import { Specifications } from "../entities/Specification";

interface ISpecificationDTO {
    name: string;
    description: string;
}
interface ISpecificationsRepository {
    create({ name, description }: ISpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specifications>;
}

export { ISpecificationsRepository, ISpecificationDTO };