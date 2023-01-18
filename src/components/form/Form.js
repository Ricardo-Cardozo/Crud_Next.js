import Input from "@/components/form/Input";
import styles from "@/styles/styleComponents/Input.module.css";
import { useState, useEffect } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setSuccess(responseData.message);
      setTimeout(() => {
        setSuccess("");
      }, 1400);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  useEffect(() => {
    const handle = async () => {
      const res = await fetch("/api/clients/")
      const data = await res.json()
      setUsers(data.users)
      console.log(data.users)
    };
    handle();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form_container}>
        <Input
          label="Nome:"
          type="text"
          placeholder="Digite seu nome"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email:"
          type="email"
          placeholder="Digite seu email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="submit" value="Enviar" />
      </form>
      <br />
      {Array.isArray(users) && users.map((user) => (
        <div key={user._id}>
          <br />
          <p>{user._id}</p>
          <br />
          <p>{user.name}</p>
          <br />
          <p>{user.email}</p>
          <br />
          <button>Deletar</button>
          <button>Editar</button>
        </div>
      ))}
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </>
  );
};
