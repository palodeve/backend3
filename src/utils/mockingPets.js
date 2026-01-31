import { faker } from "@faker-js/faker";

export const generateMockPets = (quantity) => {
  const pets = [];

  for (let i = 0; i < quantity; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.animal.dog(),
      specie: faker.helpers.arrayElement(["dog", "cat", "bird"]),
      age: faker.number.int({ min: 1, max: 15 }),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return pets;
};
