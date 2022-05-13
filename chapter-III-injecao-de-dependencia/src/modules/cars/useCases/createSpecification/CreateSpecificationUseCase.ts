import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByname(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists!");
    }

    await this.specificationRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationUseCase };