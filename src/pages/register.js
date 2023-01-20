import Input from "@/components/form/Input";
import styles from "@/styles/styleComponents/Input.module.css";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  return (
    <>
      <h1>Cadastro de cliente</h1>
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
        <Input type="submit" value="Registrar" />
      </form>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Register;
