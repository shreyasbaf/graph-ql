import { useState } from "react";
import FruitDetails from "../components/fruitDetail/FruitDetails";
import CustomModal from "../components/shared/customModal/CustomModal";
import LoadingSpinner from "../components/shared/uploadSpinner/LoadingSpinner";
import { useGetAllFruits } from "../graphql/useGetAllFruits";
import { useGetFruitByID } from "../graphql/useGetFruitByID";
import { useGetFruitsByFam } from "../graphql/useGetFruitsByFam";
import { FlexBox, ModalWrapper } from "./Home.style";

const Home = () => {
  const [family, setFamily] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const { loading, data, error } = useGetAllFruits();
  const {
    getFruitByID,
    data: fruitData,
    loading: fruitLoading,
  } = useGetFruitByID();
  const { getFruit, data: fruitFamData } = useGetFruitsByFam();
  return (
    <div>
      <h5>Search Fruits from Family</h5>
      <input
        type="text"
        placeholder="Search Family"
        onChange={(e) => setFamily(e.target.value)}
      />
      <button
        onClick={() => {
          getFruit({ variables: { family: family } });
        }}
      >
        Search
      </button>
      <br />
      {loading ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "48px 0 0 0",
            }}
          >
            <LoadingSpinner />
          </div>
        </>
      ) : (
        data &&
        data?.fruits?.map((fruit: any) => (
          <FruitDetails
            onClick={() => {
              getFruitByID({ variables: { id: fruit.id } });
              setShowDetails(true);
            }}
            id={fruit.id}
            fruitName={fruit.fruit_name}
            scientificName={fruit.scientific_name}
            family={fruit.family}
          />
        ))
      )}

      {showDetails && (
        <CustomModal
          headerText='Fruit Details'
          show={showDetails}
          toggleModal={() => setShowDetails(!showDetails)}
        >
          <ModalWrapper>
            {fruitLoading ? (
              <LoadingSpinner />
            ) : (
              <FlexBox fd={'column'}>
                <h3>Fruit Name:  {fruitData?.fruit?.fruit_name}</h3>
                <h3>Scientific Name:  {fruitData?.fruit?.scientific_name}</h3>
                <h3>Family: {fruitData?.fruit?.family}</h3>
              </FlexBox>
            )}
          </ModalWrapper>
        </CustomModal>
      )}
    </div>
  );
};

export default Home;
