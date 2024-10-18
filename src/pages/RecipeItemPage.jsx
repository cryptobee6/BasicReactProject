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
// These are the default breakpoints


  return (

    <Center
      bgColor="blue.400"
  
      h="full"
      flexDirection="column"
      justifyContent={"flex-start"}
  

    >
      <Card w={["90%", "80%"]} borderRadius="xl" h={["100%", "100%"]}>
        <CardBody w={["100%", "100%"]} h={["100%", "100%"]}>
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
            <Box>
              <Heading text-align="center">Kijes Recipes</Heading>
            </Box>
          </Flex>

          <Center flexDirection="column">
            <Image
              h={["200px", "200px"]}
              objectFit="cover"
              mt={2}
              w={["100%", "100%"]}
              src={recipe.image}
            />
          </Center>
          <SimpleGrid mt="1rem" columns={{base: 1, md: 2}} spacing={4}>
            <Box bg="white" h="100%">
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

              <Flex wrap="wrap">
                {Object.keys(recipe.totalNutrients.ENERC_KCAL).map((key) => (
                  <Text key={key} m={2}>{recipe.totalNutrients.ENERC_KCAL[key]}</Text>
                ))}
              </Flex>

              <Flex wrap="wrap">
                {Object.keys(recipe.totalNutrients.PROCNT).map((key) => (
                  <Text key={key} m={2}>{recipe.totalNutrients.PROCNT[key]}</Text>
                ))}
              </Flex>
              <Flex wrap="wrap">
                {Object.keys(recipe.totalNutrients.FAT).map((key) => (
                  <Text key={key} m={2}>{recipe.totalNutrients.FAT[key]}</Text>
                ))}
              </Flex>
              <Flex wrap="wrap">
                {Object.keys(recipe.totalNutrients.CHOCDF).map((key) => (
                  <Text key={key} m={2}>{recipe.totalNutrients.CHOCDF[key]}</Text>
                ))}
              </Flex>
              <Flex wrap="wrap">
                {Object.keys(recipe.totalNutrients.CHOLE).map((key) => (
                  <Text key={key} m={2}>{recipe.totalNutrients.CHOLE[key]}</Text>
                ))}
              </Flex>
              <Flex wrap="wrap">
                {Object.keys(recipe.totalNutrients.NA).map((key) => (
                  <Text key={key} m={2}>{recipe.totalNutrients.NA[key]}</Text>
                ))}
              </Flex>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Center>
  );
};
