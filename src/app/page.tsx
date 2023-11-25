"use client";
import React, { useEffect, useState, Fragment } from "react";
import { getAllRestaurant } from "./services/restaurantService";
import RestaurantList from "./components/RestaurantList";

export default function Home() {
  const [restaurants, setRestaurants] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await getAllRestaurant();
      const data = await response?.data;
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <RestaurantList restaurants={restaurants} />
    </Fragment>
  );
}
