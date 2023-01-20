import Card from "@/components/Card";
import { useState, useEffect } from "react";
import Input from "@/components/form/Input";

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.FETCH}`);
    const data = await res.json();
    const users = await data.users;

    return {
      props: { users, fallback: false},
      
    };
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default function Home({ users }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(users);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
    const results = users.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (results.length === 0) {
      setErrorMessage(`Nenhum cliente encontrado!`);
    } else {
      setSearchResults(results);
    }
  }, [searchValue, users]);

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <h1 style={{ marginBottom: "2em" }}>Clientes cadastrados</h1>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <Input
        type="text"
        name="search"
        placeholder="Procure por nome do cliente"
        onChange={handleSearch}
        label="Buscar por clientes:"
      />
      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
      {!errorMessage &&
        searchResults.map((user) => {
          return (
            <Card
            key={user._id}
            id={user._id}
            name={user.name}
            email={user.email}
            onError={setError}
            onSuccess={setSuccess}
            as={`/edit/${user._id}`}
            href={`/edit/[editId]?id=${user._id}`}
          />
          );
        })}
    </>
  );
}
