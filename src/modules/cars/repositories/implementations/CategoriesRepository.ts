import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ description, name }: ICreateCategoryDTO): Promise<Category> {
        const category = await this.repository.create({
            description,
            name,
        });

        return await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const categories = await this.repository.findOne({ name });
        return categories;
    }
}

export { CategoriesRepository };