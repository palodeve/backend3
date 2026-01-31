import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: String,
    specie: String,
    age: Number
  },
  { timestamps: true }
);

const PetModel = mongoose.model("pets", petSchema);
export default PetModel;
