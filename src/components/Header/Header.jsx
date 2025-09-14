import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuContext } from "../../context/MenuContext";
import { IoChevronBack } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

gsap.registerPlugin(useGSAP);

const Header = () => {

  const contextData = useContext(MenuContext);
  const { menuState, setMenuState } = contextData;
  const { dishes, category } = menuState;

  const categories = [
    { name: "Starter" },
    { name: "Main Course" },
    { name: "Sides" },
    { name: "Dessert" },
  ];

  // filter animation
  

  // finding the active category
  const activeCategory = categories.find(
    (eachCategory) => eachCategory.name === category
  );

  // function to change the category
  const changeCategory = (e) => {
    setMenuState({
      ...menuState,
      category: e.target.id,
    });
  };

  // function to handle search
  const handleSearch = (e) => {
    setMenuState({
      ...menuState,
      search: e.target.value,
    });
  };

  // function to handle filter
  const toggleFilter = (e) => {
    setMenuState({
      ...menuState,
      type: e.target.id,
    });
  };

  // function to go back
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex flex-col items-center w-screen p-5 h-max">
      <div className="flex flex-row items-center justify-around border-1 w-full h-[60px] rounded-2xl p-3">
        <IoChevronBack size={30} onClick={handleGoBack} />
        <input
          type="text"
          placeholder="Search"
          className="w-[70%] h-full rounded-2xl p-2 border-none outline-none border-gray-400"
          onChange={handleSearch}
          value={menuState.search}
        />
        <button className="w-[20%] h-full rounded-2xl p-2 border-none outline-none border-gray-400">
          <IoSearchOutline size={24} />
        </button>
      </div>
      {/* categories */}
      <div className="flex flex-row items-center justify-around gap-5 px-2 w-screen h-[60px] pointer-events-auto">
        {categories.map((category) => (
          <button
            key={category.name}
            id={category.name}
            className={
              "min-w-max  h-[30px] z-10 px-2 rounded-md text-center border-1 outline-none cursor-pointer border-gray-400 text-sm" +
              (activeCategory && activeCategory.name === category.name
                ? " bg-orange-500 text-white border-none"
                : "")
            }
            onClick={changeCategory}
          >
            {category.name}{" "}
            <span className="text-sm">
              ({dishes.filter((dish) => dish.category === category.name).length}
              )
            </span>
          </button>
        ))}
      </div>
      {/* filters Veg or Non-veg */}
      <div className="flex flex-row items-center justify-between p-5 w-full h-[60px]">
        <p className="text-sm">Select your meal type</p>
        <div className="flex flex-row items-center  h-[60px] gap-5">
          <button
            className="flex flex-row items-center cursor-pointer h-[60px] w-max "
            id="VEG"
            value={"VEG"}
            onClick={toggleFilter}
            type="button"
          >
            <div className="w-[30px] h-[30px] VEG border-2 border-green-600 bg-white rounded-lg flex flex-row items-center justify-center -z-1 pointer-events-none">
              <div className="w-[15px] h-[15px]  bg-green-600 rounded-[50%]"></div>
            </div>
            <div className="-z-1 w-[24px] h-[8px] VEG2 bg-gray-100 rounded-[5px]"></div>
          </button>
          <button
            className="flex flex-row items-center h-full w-[100px] "
            id="NON-VEG"
            onClick={toggleFilter}
          >
            <div className="w-[30px] h-[30px] border-2 NON-VEG bg-white border-red-600 curson-pointer rounded-lg flex flex-row items-center justify-center pointer-events-none">
              <div className="w-[15px] h-[15px] bg-red-600 rounded-[50%] z-0"></div>
            </div>
            <div className="-z-1 w-[24px] h-[8px] bg-gray-100 NON-VEG2 rounded-[5px] "></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
