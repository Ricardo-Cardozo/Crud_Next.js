import User from "@/models/User";

export default async function handler(req, res) {
  const { method } = req;
  const { userId } = req.query;

  switch (method) {
    case "PATCH":
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(200).json({ message: "Preencha todos os campos!" });
      }

      const user = { name, email };

      try {
        await User.findByIdAndUpdate(userId, user);
        res
          .status(200)
          .json({ message: "Usuário atualizado com sucesso!", user, method });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Ocorreu um error, tente mais tarde!" });
      }

      break;
    case "DELETE":

      try {
        await User.findByIdAndDelete(userId);
        res
          .status(200)
          .json({ message: "Usuário deletado com sucesso!", method });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Ocorreu um erro, tente mais tarde!" });
      }

      break;

    default:
      break;
  }
}
