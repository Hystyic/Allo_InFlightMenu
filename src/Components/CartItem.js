import React from 'react';

const CartItem = ({ selectedMeals, selectedDrinks, calculateSubtotal, activeButton, handleSelectPassenger, mealList, handleRemoveMeal }) => {
    
  const passengerHasMeal = (passengerNumber) => selectedMeals[passengerNumber];

  return (
    <div className="flex flex-col px-4 md:px-8 py-6 rounded-lg border border-gray-400 bg-gray-200 md:w-full space-y-6">
      
      <div className="py-3">
        <label htmlFor="passenger-select" className="block text-sm font-medium text-gray-700 mb-2">Select Passenger</label>
        <select
          id="passenger-select"
          name="passengers"
          className={`block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md ${
            activeButton ? 'bg-gray-300 text-black' : ''
          }`}
          defaultValue=""
          onChange={(e) => handleSelectPassenger(parseInt(e.target.value))}
        >
          <option value="" disabled>Select a passenger</option>
          <option value="1">Passenger 1</option>
          <option value="2">Passenger 2</option>
        </select>
      </div>

      {activeButton && (
        <div className={`flex flex-col md:flex-row rounded-lg ${activeButton ? 'bg-gray-300' : ''} py-4 md:py-6 md:space-x-4`}>
          {passengerHasMeal(activeButton) ? (
            <div className="flex flex-1 md:flex-row items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-semibold">
                  Selected Meal: {mealList.find((m) => m.id === selectedMeals[activeButton])?.title}
                </p>
                {(selectedMeals[activeButton] && selectedDrinks[activeButton]) && (
                  <p className="text-sm font-semibold">
                    Selected Drink: {selectedDrinks[activeButton] ? selectedDrinks[activeButton].drinkTitle : 'None'}
                  </p>
                )}
                <p className="text-md font-semibold">
                  Subtotal: {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(calculateSubtotal(activeButton))}
                </p>
              </div>
              <button
                className="text-md font-semibold bg-red-500 text-white rounded hover:bg-red-600 px-4 py-2 ml-4"
                onClick={(e) => { e.stopPropagation(); handleRemoveMeal(activeButton); }}
              >
                Remove
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default CartItem;
