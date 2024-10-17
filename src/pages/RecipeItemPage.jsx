import {
  Center,
  Image,
  Card,
  CardBody,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/TAG";
import { ArrowLeftIcon } from "@chakra-ui/icons";






export const RecipeItemPage = ({ recipe, onClick }) => {


  console.log(recipe.totalNutrients.ENERC_KCAL.label)
  return (


    <Center bgColor="blue.100" h="100vh" flexDirection="column" justifyContent={"flex-start"}>
<Card borderRadius="xl" w="3xl" h="4xl">
<CardBody>
      <Flex justify="space-between" align="center" w="100%">

  <Box>
  <ArrowLeftIcon
    w="fit-content"
    _hover={{ transform: "scale(1.3)" }}
    onClick={() => onClick()}
  >
    Back

    </ArrowLeftIcon>
  </Box>
  <Box  > 
  <Heading text-align="center">Recipe</Heading>
  </Box>


</Flex>

    <Center flexDirection="column">
      <Image h={["200px", "200px"]}  objectFit="cover" mt={2} w={["200px", "1000px"]} src={recipe.image} />



      </Center>
      <SimpleGrid mt="1rem" columns={[1,2]} spacing={5}>
      

    <Box bg="white" h="280px">
      <Text>{recipe.mealType}</Text>
      <Heading size="md">{recipe.label}</Heading>
      <Flex>
        <Text>Servingtime: {recipe.totalTime}</Text>
      </Flex>
      <Flex>
        <Text>Servings: {recipe.yield}</Text>
      </Flex>
      <Flex>
        <b>Ingredients:</b>
      </Flex>
      <Flex>
        <Text> {recipe.ingredientLines}</Text>
      </Flex>
    </Box>
    <Box bg="white">
      <Text>Health labels: </Text>
      {/* <Flex gap={2}> */}
      {recipe.healthLabels.map((healthLabel) => (
        <Tag
          key={healthLabel}
          size="sm"
          m={0.5}
          color="black"
          bgColor="purple.300"
        >
          {healthLabel}
        </Tag>
      ))}
      <Text>Diet:</Text>
      {recipe.dietLabels.map((dietLabel) => (
        <Tag key={dietLabel} m={0.5} color="black" bgColor="green.300">
          {dietLabel}
        </Tag>
      ))}
      <Text>Cautions:</Text>
      {recipe.cautions.map((caution) => (
        <Tag key={caution} m={0.5} color="black" bgColor="red.300">
          {caution}
        </Tag>
      ))}

<Text>Nutrients:</Text>

<Flex >
        {Object.keys(recipe.totalNutrients.ENERC_KCAL).map((key) => (
          <Text m={2}>{recipe.totalNutrients.ENERC_KCAL[key]}</Text>
        ))}
        
        </Flex>

        <Flex>
        {Object.keys(recipe.totalNutrients.PROCNT).map((key) => (
          <Text m={2}>{recipe.totalNutrients.PROCNT[key]}</Text>
        ))}
        </Flex>
        <Flex>
        {Object.keys(recipe.totalNutrients.FAT).map((key) => (
          <Text m={2}>{recipe.totalNutrients.FAT[key]}</Text>
        ))}
        </Flex>
        <Flex>
        {Object.keys(recipe.totalNutrients.CHOCDF).map((key) => (
          <Text m={2}>{recipe.totalNutrients.CHOCDF[key]}</Text>
        ))}
        </Flex>
        <Flex>
        {Object.keys(recipe.totalNutrients.CHOLE).map((key) => (
          <Text m={2}>{recipe.totalNutrients.CHOLE[key]}</Text>
        ))}
        </Flex>
        <Flex>
        {Object.keys(recipe.totalNutrients.NA).map((key) => (
          <Text m={2}>{recipe.totalNutrients.NA[key]}</Text>
        ))}
        </Flex>

          
          


         




       





    </Box>
  </SimpleGrid>
  </CardBody>
  </Card> 
    </Center>

  );
};
