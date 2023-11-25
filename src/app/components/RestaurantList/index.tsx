"use client";
import React from "react";
import RestaurantItem from "../RestaurantItem";

interface Restaurant {
  restaurant_name: string;
  state: string;
}

interface RestaurantsProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<RestaurantsProps> = ({ restaurants }) => {
  // Group restaurants by state
  const groupedByState: { [key: string]: Restaurant[] } = {};

  restaurants.forEach((restaurant) => {
    if (!groupedByState[restaurant.state]) {
      groupedByState[restaurant.state] = [];
    }
    groupedByState[restaurant.state].push(restaurant);
  });

  console.log("groupedByState: ", groupedByState);

  return (
    <div className="lg:flex flex-col items-center justify-center w-full gap-2 lg:gap-4 mt-8 lg:mt-10">
      {Object.keys(groupedByState).map((state) => (
        <div
          key={state}
          className="focus:outline-none lg:w-1/2 lg:mr-7 lg:mb-0 mb-7 bg-white p-4 shadow rounded-md"
        >
          <h2 className="text-2xl font-bold mb-2 p-4 border-b-[1px] border-gray-300 text-center">
            {state}
          </h2>
          <ul className="list-disc text-center">
            {groupedByState[state].map((restaurant, index) => (
              <RestaurantItem
                key={index}
                restaurantName={restaurant.restaurant_name}
                index={index}
                className="text-gray-700 list-none p-4 border-b-[1px] border-gray-300"
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
