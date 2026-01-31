import { Router } from "express";
import { generateMockUsers } from "../utils/mockingUsers.js";
import { generateMockPets } from "../utils/mockingPets.js";
import UserModel from "../models/user.model.js";
import PetModel from "../models/pet.model.js";

const router = Router();
//get
router.get("/mockingpets", (req, res) => {
  const pets = generateMockPets(100);
  res.json({ status: "success", payload: pets });
});

//get
router.get("/mockingusers", (req, res) => {
  const users = generateMockUsers(50);
  res.json({ status: "success", payload: users });
});

//post
router.post("/generateData", async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  const mockUsers = generateMockUsers(users);
  const mockPets = generateMockPets(pets);

  await UserModel.insertMany(mockUsers);
  await PetModel.insertMany(mockPets);

  res.json({
    status: "success",
    message: "Datos generados e insertados correctamente",
  });
});

export default router;
