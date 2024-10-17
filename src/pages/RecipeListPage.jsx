import { TextInput } from "../components/ui/TextInput.jsx";
import { useState } from "react";
import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data.js";
import { RecipeItemCards } from "../components/RecipeItemCards.jsx";

export const RecipeListPage = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
    <Center bgColor="blue.400" flexDirection={"column"}>
      <Heading bgColor="blue.400" color="White" align="center">
        Kijes recipe application
      </Heading>

      <Heading mt="10" color="White" >Searchbar for drinks: </Heading>
      <TextInput onChange={handleChange} />
      {/* <Center flexWrap={"wrap"}> */}
      <RecipeItemCards
        bgColor="blue.600"
        onClick={onClick}
        recipes={matchedRecipes}/>
       

      </Center>
    </>
  );
};
