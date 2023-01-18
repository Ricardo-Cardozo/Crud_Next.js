import Input from "@/components/form/Input";
import styles from "@/styles/styleComponents/Input.module.css";
import { useState } from "react";

export async function getServerSidePropos() {}

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [register, setRegister] = useState(true);
  const [edit, setEdit] = useState(false);

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
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  const handleRegister = async (e) => {
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
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  const openRegister = () => {
    setRegister(true);
    setEdit(false);
  };

  const openEdit = () => {
    setRegister(false);
    setEdit(true);
  };

  return (
    <>
      <div>
        <button
          className={`${styles.btn} ${styles.register}`}
          onClick={openRegister}
        >
          Registrar
        </button>
        <button className={`${styles.btn} ${styles.edit}`} onClick={openEdit}>
          Editar
        </button>
      </div>
      {register && (
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
      )}
      {edit && (
        <form onSubmit={handleRegister} className={styles.form_container}>
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
          <Input type="submit" value="Editar" />
        </form>
      )}
      <br />
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </>
  );
};
