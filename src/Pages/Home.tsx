import { useState } from "react";
import LoadingSpinner from "../components/uploadSpinner/LoadingSpinner";
import { useGetAllFruits } from "../graphql/useGetAllFruits";
import { useGetFruitsByFam } from "../graphql/useGetFruitsByFam";
import { useGetFruitByID } from "../graphql/useGetFruitByID";

const Home = () => {
  const [family, setFamily] = useState("");
  const { loading, data, error } = useGetAllFruits();
  const { getFruit, data: fruitFamData } = useGetFruitsByFam();
  const { getFruitByID, data: fruitData } = useGetFruitByID();

  return (
    <div>
      <h5>Search Fruits from Family</h5>
      <input
        type="text"
        placeholder="Search Family"
        onChange={(e) => setFamily(e.target.value)}
      />
      <button onClick={() => getFruit({ variables: { family: family } })}>
        Search
      </button>
      <br />
      {loading ? (
        <LoadingSpinner />
      ) : (
        data &&
        data?.fruits?.map((fruit: any) => (
          <div
            key={fruit.id}
            onClick={() => {
              getFruitByID({ variables: { id: fruit.id } });
            }}
            style={{
              background: "black",
              color: "white",
              margin: "8px",
              padding: "8px",
            }}
          >
            <p>
              {`${fruit.fruit_name} by ${fruit.scientific_name} From ${fruit.family}`}{" "}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
