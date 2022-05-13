import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByname(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists!");
    }

    this.specificationRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationUseCase };