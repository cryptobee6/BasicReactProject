import { RecipeListPage } from './pages/RecipeListPage';
import { useState } from 'react';
import { RecipeItemPage } from './pages/RecipeItemPage';


//import { RecipeItemPage } from './pages/RecipeItemPage'


export const App = () => {
  // Your state code here'
  const [selectedItem, setSelectedItem] = useState();

  return (
<div>
  {selectedItem ? (
    <RecipeItemPage recipe={selectedItem}  onClick={setSelectedItem} />
  ) : (
    <>
    <RecipeListPage onClick={setSelectedItem}/>
    </>
  )}
</div>
  )
};
