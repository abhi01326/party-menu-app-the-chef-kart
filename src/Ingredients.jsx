import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import menuData from "./constants/data";

const Ingredients = () => {
  let params = useParams();
  const dishId = parseInt(params.dishId);
  const dish = menuData.find((eachDish) => eachDish.id === dishId);
  console.log(dish, menuData, dishId);
  const { name, description, image, ingredients } = dish;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen w-screen p-3 flex flex-col items-center">
      <section className="flex flex-row gap-5 p-5 items-center self-start">
        <button className="text-lg font-bold cursor-pointer" onClick={handleGoBack} type="button" >{"<"}</button>
        <h4 className="text-lg font-bold mr-2">Ingredients List</h4>
      </section>
      <section className="flex flex-row w-screen h-[30vh]  justify-between p-5">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-400">{description}</p>{" "}
          </div>
          <div>
            <p className="text-2xl font-bold">Ingredients</p>
            <p className="text-gray-500">For 2 people</p>
          </div>
        </div>
        <img src={image} className="h-full w-[200px]" alt="dish" />
      </section>
      <hr className="w-[90%]  h-[2px] border-1 border-gray-400 self-center" />
      <div className="flex flex-col p-4">
        {ingredients.map((eachIngredient) => {
        return (
          <div
            key={eachIngredient.item}
            className="flex flex-row justify-between w-screen p-4 md:justify-around"
          >
            <p>{eachIngredient.item}</p>
            <p>{eachIngredient.quantity}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Ingredients;
