import React, { useContext , useState} from "react";
import { useSelector } from "react-redux";
import { MenuContext } from "../context/MenuContext";
import DishItem from "./DishItem";
import Modal from "./Modal";

const Dishes = () => {
  const [modalData, setModal] = useState({
    modal: false,
    dish: {}
  });
  
  const menuData = useContext(MenuContext);
  const dishes = menuData.menuState.dishes;
  const category = menuData.menuState.category;


  let filteredDishes = dishes.filter(
    (dish) =>
      dish.category.includes(category) &&
      dish.name.toLowerCase().includes(menuData.menuState.search.toLowerCase())
  );


  const type = menuData.menuState.type;
  if (type !== "") {
    filteredDishes = filteredDishes.filter((dish) => dish.type === type);
  }

  const cart = useSelector((state) => state.cart.cart);
  const cartLength = cart.length;


  const toggleModal = (dishId)=>{
    let modalDish = dishes.find((dish) => dish.id === dishId);
    setModal({modal: !modalData.modal, dish: modalDish})
  }


  return (
    <div className="flex flex-col  w-screen ">
      <div className="flex flex-col gap-5 max-w-screen h-full">
        {filteredDishes.length > 0
          ? filteredDishes.map((dish) => <DishItem key={dish.id} dish={dish} toogleModal={toggleModal} />)
          : dishes.map((dish) => <DishItem key={dish.id} dish={dish} toogleModal={toggleModal} />)}
      </div>
      {/* cart item */}
      <div className="h-[15vh] fixed w-screen bg-white bottom-0 p-4 flex flex-col justify-around items-center">
        <div className="flex flex-row w-full justify-between items-center">
          <p className="">Total Dish Selected : {cartLength}</p>
        </div>
        <hr className="w-[90%]  h-[4px] border-2 border-gray-400" />
        <button className="bg-black text-white w-[90%] h-[40px] rounded-xl ">
          Continue
        </button>
      </div>
      {modalData.modal && (
        <Modal dish={modalData.dish} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Dishes;
