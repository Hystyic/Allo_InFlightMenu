import {useState} from 'react';
import TagList from './TagList';
import MenuCard from './MenuCard';
import mealData from '../Dataset.json';

const MealPage = () => {

  const [selectedLabel, setSelectedLabel] = useState('all'); 
   
  
  const handleLabelSelect = (labelId) => {
    setSelectedLabel(labelId);
  };

  return (
    <div className = "mt-10">
      <TagList onLabelSelect={handleLabelSelect}/>
      <MenuCard selectedLabel={selectedLabel} mealList={mealData.meals} />  
     </div>
  )
}

export default MealPage
