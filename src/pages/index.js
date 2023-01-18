import Card from "@/components/Card";
import { Form } from "@/components/form/Form";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/clients/");

  const data = await res.json();

  const users = await data.users;

  console.log(users); 

  return {
    props: { users, fallback: false },
  };
}

export default function Home({ users }) {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  return (
    <>
      <h1>Registro de nome e email</h1>
      <Form />
      <br />
      {users.map((user) => (
        <Card
        key={user._id}
        id={user._id}
        name={user.name}
        email={user.email}
        onError={setError}
        onSuccess={setSuccess}
      />
      ))}
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </>
  );
}
