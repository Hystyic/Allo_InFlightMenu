import React from 'react';

const MenuItem = ({ meal, selectedDrinks, handleSelectDrink, handleSelectMeal }) => {
  return (
    <div className="py-2 flex flex-col md:flex-row duration-300 px-3 border-b border-gray-300">
      <div className='flex flex-col md:flex-row w-full items-center md:justify-between mt-1'>
        <img
          className="w-full md:w-52 lg:w-60 h-36 md:h-36 rounded-lg object-cover md:mr-4"
          src={meal?.img}
          alt={meal?.title}
        />
        <div className="flex-1 flex flex-col md:ml-4 mt-4 md:mt-0">
          <h3 className="text-lg md:text-xl font-bold">{meal?.title}</h3>
          <p className="mt-1 text-sm md:text-base text-gray-800 font-semibold">
            Starter: {meal?.starter}
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-700 font-semibold">
            Dessert: {meal?.desert}
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-700 font-semibold">
            Selected Drink: {selectedDrinks[meal?.id] || 'None'}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {meal.drinks?.map((drink) => {
              // Determine if this drink is the selected one
              const isSelected = selectedDrinks[meal?.id] === drink?.title;
              return (
                <div key={drink?.id} className="flex flex-col items-center">
                  <button
                    className={`px-3 py-1 text-white rounded mb-1 ${
                      isSelected ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"
                    }`} // Apply different styles based on selection
                    onClick={() => handleSelectDrink(meal?.id, drink?.title, drink?.price)}
                  >
                    {drink?.title}
                  </button>
                  <p className="text-xs md:text-sm text-gray-900 font-semibold">
                    {drink?.price > 0
                      ? new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'EUR',
                        }).format(drink?.price)
                      : 'Free'}
                  </p>
                </div>
              );
            })}
            <div className="flex flex-col items-center ml-4 mb-2 md:ml-8 md:mt-0">
              <p className="mb-2 text-xs md:text-sm text-gray-900 font-semibold">
                {meal?.price > 0
                  ? new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(meal?.price)
                  : 'Free'}
              </p>
              <button
                className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-700"
                onClick={() => handleSelectMeal(meal?.id)}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
