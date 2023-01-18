import User from "@/models/User";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res
          .status(200)
          .json({ message: "Deu certo!", users, success: true, method });
      } catch (error) {
        res.status(200).json({ message: "Deu errado!", success: false, error });
      }
      break;
    case "POST":
      try {
        const { name, email } = req.body;

        if (!name || !email) {
          res.status(422).json({ message: "Preencha todos os campos" });
        }

        const user = new User({
          name,
          email,
        });

        const newUser = await user.save();

        res.status(200).json({ message: "Registrado com sucesso", newUser });
      } catch (error) {
        res.status(422).json({ message: "Preencha todos os campos" });
      }
      break;

    default:
      break;
  }
}
