import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import MyPetsList from "../../components/MyPetsList/MyPetsList";
import { selectUser } from "../../store/user/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function MyPets() {
  const user = useSelector(selectUser);
  const [myPets, set_myPets] = useState([]);

  useEffect(() => {
    async function fetchMyPets() {
      const response = await axios.get(
        `http://localhost:4000/caretakers/mypets`
      );
      set_myPets(response.data.caretakers);
    }
    fetchMyPets();
  }, []);

  return (
    <div>
      <Jumbotron>
        <h1>These are your awesdome pets!</h1>
      </Jumbotron>
      <MyPetsList
      //key={pet.id}
      //petName={pet.PetName}
      //image={pet.image}
      //ownerUserName={user.userName}
      //species={pet.species}
      //animalType={pet.animal_type}
      //petDescription={pet.pet_description}
      />
    </div>
  );
}
