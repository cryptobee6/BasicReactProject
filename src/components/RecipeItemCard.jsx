import {
    Card,
    Image,
    CardBody,
    Stack,
    Heading,
    Text,
    Flex,
  } from "@chakra-ui/react";
  import { Tag } from "./ui/TAG";

  
  export const RecipeItemCard = ({ recipe, onClick }) => {

  
    return (
      <Card
        align="center"
        borderRadius="xl"
        w="sm"
        h="33rem"
        mt="8"
        onClick={() => onClick(recipe)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      >
        <CardBody align="center">
          <Image h={64} w="sm" src={recipe.image} borderRadius="xl" />
          <Stack align="center" mt="4" spacing="1">
            <Text color="grey">{recipe.mealType}</Text>
            <Heading size="md" mt={-1}>
              {recipe.label}
            </Heading>
            <Flex>
              {recipe.healthLabels.map((healthLabel) => healthLabel.includes("Vegan") ? (
                  <Tag key={healthLabel} m={1} color="black" bgColor="purple.300">{healthLabel}</Tag>
                ) : null
              )}
              {recipe.healthLabels.map((healthLabel) => healthLabel.includes("Vegetarian") ? (
                  <Tag key={healthLabel} m={1} color="black" bgColor="purple.300">{healthLabel}</Tag>
                ) : null
              )}
            </Flex>
  
            <Flex>
              {recipe.dietLabels.map((dietLabel) => (
                <Tag key={dietLabel} m={1} color="black">{dietLabel}</Tag>
              ))}
            </Flex>
  
            <Flex gap={2}>
              <Text mt="0.5">Dish:</Text>
              {recipe.dishType.map((dishtype) => (
                <Tag key={dishtype} bgColor="white" color="black">{recipe.dishType}</Tag>
              ))}
            </Flex>
  
            <Flex gap={2}>
              <Text mt="0.5">Cautions:</Text>
              {recipe.cautions.map((caution) =>caution.includes("Sulfites") ? (
                  <Tag key={caution} m={0} color="black" bgColor="red.400">{caution}</Tag>
                ) : null
              )}
              {recipe.cautions.map((caution) =>caution.includes("Tree-Nuts") ? (
                  <Tag key={caution} m={0} color="black" bgColor="red.400">{caution}</Tag>
                ) : null
              )}
            </Flex>

          </Stack>
        </CardBody>
      </Card>
    );
  };