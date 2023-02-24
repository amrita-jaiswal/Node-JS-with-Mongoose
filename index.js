const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});

const saveInDb = async () => {
  const ProductModal = mongoose.model("products", ProductSchema);
  let data = new ProductModal({
    name: "Nexus 8",
    price: 800,
    brand: "Samung",
    Category: "Mobile",
  });
  let result = await data.save();
};

const updateInDb = async () => {
  const ProductModal = mongoose.model("products", ProductSchema);
  let data = await ProductModal.updateOne(
    { name: "POCO" },
    {
      $set: { price: 345, Category: "Phone" },
    }
  );
};

const deleteInDB = async () => {
  const ProductModal = mongoose.model("products", ProductSchema);
  let data = await ProductModal.deleteOne({ name: "POCO" });
  console.log(data);
};


const findInDB = async () => {
    const ProductModal = mongoose.model("products", ProductSchema);
    let data = await ProductModal.find({ name: "POCO" });
    console.log(data);
  };
  
findInDB();
