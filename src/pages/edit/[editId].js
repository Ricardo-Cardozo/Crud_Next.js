export async function getServerSideProps({ query }) {
  try {
    console.log(query);
    const { id } = query;
    return { props: { id } };
  } catch (error) {
    console.log("Error: ", error);
  }
}

const Edit = ({ id }) => {
  return (
    <div>
      <h1>id: {id}</h1>
    </div>
  );
};

export default Edit;
