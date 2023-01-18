import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `${process.env.MONGO_URI}:${process.env.PORT}/${process.env.NAME_DB}`
  );
  console.log("Connection with mongo works!! ");
}

main().catch((err) => {
  console.log(err);
});

export default mongoose