import { RecipeItemCard } from './RecipeItemCard';
import { Center } from '@chakra-ui/react';

export const RecipeItemCards = ({ recipes, onClick }) => {

	return (
		<Center flexWrap="wrap" gap={2}>
	
			{recipes.map(({recipe}) => (
				<RecipeItemCard key={recipe.label}  recipe={recipe} onClick={onClick} />
			))}
	
		</Center>
);
};