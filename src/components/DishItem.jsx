import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../store/CartSlice';

const DishItem = ({ dish , toogleModal}) => {


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  let [isAdded, setIsAdded] = React.useState(false);
  const isfound = cart.find((item) => item.id === dish.id);
  if(isfound){
    isAdded = true
  }
  const handleAddDish = () => {
    setIsAdded(true)
    if(isfound){
      return 
    }
    dispatch(addToCart(dish))
  };


  const handleRemoveDish = () => {
    setIsAdded(false)
    console.log("deleted dish");
    dispatch(removeFromCart({id: dish.id}))
  };

  const classForBorderOFType = dish.type === "VEG" ? "border-green-600" : "border-red-600";
  const classForType = dish.type === "VEG" ? "bg-green-600" : "bg-red-600";

  //funtion to handle modal

  return (
      <div className="flex flex-row h-[180px] min-w-[100vw] justify-between items-center py-3 px-5 shadow-sm border-gray-100" >
        <div className="flex flex-col justify-between w-full py-2 " onClick={()=>toogleModal(dish.id)}>
          <div>
            <div className="flex flex-row gap-3 items-center">
              <h4 className="text-lg font-bold">{dish.name}</h4>
              <div className={"w-[20px] h-[20px] border-2 curson-pointer rounded-lg flex flex-row items-center justify-center -z-1 " + classForBorderOFType}>
                <div className={"w-[10px] h-[10px] rounded-[50%] "+ classForType}></div>
              </div>
            </div>
            <p className="w-[70%] text-sm text-gray-400">
              {dish.description} ...
              <button className="font-bold text-orange-300" >Read more</button>
            </p>
          </div>
          <Link to={`/ingredients/${dish.id}`}>
            <button className="h-[40px] w-[130px] rounded-xl border-gray-300 outline-none cursor-pointer bg-white text-orange-400 text-md py-2 text-center">
              View Ingredients
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center h-full  relative w-[200px]">
          <div className="h-[120px] w-[160px] rounded-2xl absolute ">
            <img
              src={dish.image}
              className="h-[120px] w-[160px] object-cover rounded-2xl"
              alt="dish"
            />
          </div>
          {isAdded ? (
            <button
              className="h-[40px] w-[130px] rounded-xl absolute border-none bottom-[5px] flex flex-row items-center justify-center outline-none cursor-pointer bg-orange-400 text-white text-xl p-0"
              onClick={handleRemoveDish} 
              id={dish.id}
              type="button"
            >
              <span>Remove</span><MdDeleteOutline  size={20} className="m-0"/>
            </button>
          ) : (
            <button
              className="h-[40px] w-[130px] rounded-xl absolute border-gray-300 bottom-[5px] outline-none cursor-pointer bg-white text-green-400 text-xl py-2 text-center"
              onClick={handleAddDish}
              id={dish.id}
              type="button"
            >
              Add +
            </button>
          )}
      </div>
      
    </div>
  );
};

export default DishItem;
