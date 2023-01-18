import styles from "@/styles/styleComponents/Card.module.css";

const Card = ({ name, email, id, onError, onSuccess }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: "DELETE"
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      onSuccess(responseData.message)
      window.location.reload()
    } catch (err) {
      onError(err.message);
    }
  };

  return (
    <div className={styles.card_container}>
      <h3>Id: {id}</h3>
      <label>
        Nome:
        <p>{name}</p>
      </label>
      <label>
        E-mail:
        <p>{email}</p>
      </label>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default Card;
