export const saveSelectedMealToLocalStorage = (passenger, mealId) => {
  localStorage.setItem(`selectedMeal_${passenger}`, mealId);
};

export const getSelectedMealFromLocalStorage = (passenger) => {
  const storedMealId = localStorage.getItem(`selectedMeal_${passenger}`);
  return storedMealId || null;
};

export const saveSelectedDrinkToLocalStorage = (passenger, mealId, drinkTitle, drinkPrice) => {
  localStorage.setItem(`selectedDrink_${passenger}_${mealId}`, JSON.stringify({ drinkTitle, drinkPrice }));
};

export const getSelectedDrinkFromLocalStorage = (passenger, mealId) => {
  const storedDrinkData = localStorage.getItem(`selectedDrink_${passenger}_${mealId}`);
  return storedDrinkData ? JSON.parse(storedDrinkData) : null;
};
