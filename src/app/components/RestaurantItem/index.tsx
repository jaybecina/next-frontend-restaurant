"use client";
import React from "react";

interface RestaurantItemProps {
  restaurantName: string;
  index: number;
  className: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
  restaurantName,
  index,
  className,
}) => {
  return (
    <>
      <li key={index} className={className}>
        {restaurantName}
      </li>
    </>
  );
};

export default RestaurantItem;
