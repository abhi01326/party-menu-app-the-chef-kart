import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const Modal = ({ dish, toggleModal }) => {
  const classForBorderOFType =
    dish.type === "VEG" ? "border-green-600" : "border-red-600";
  const classForType = dish.type === "VEG" ? "bg-green-600" : "bg-red-600";
  return (
    <div
      className="modal h-screen w-screen bottom-[0px]"
      onClick={() => toggleModal()}
    >
      <div className="overlay flex flex-col min-h-screen min-w-screen justify-end ">
        <div className="modal-content h-[40vh] md:flex-row w-screen rounded-se-[20px] rounded-ss-[20px] bg-white flex flex-col p-3 items-center">
          <img
            src={dish.image}
            alt={dish.name}
            className="h-[200px] w-[95%] md:w-[400px] rounded-[20px]"
          />
          <div className="flex flex-col justify-between w-full py-2">
            <div className="">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row items-center gap-2 ">
                  <h4 className="text-lg font-bold">{dish.name}</h4>
                  <div
                    className={
                      "w-[20px] h-[20px] border-2 curson-pointer rounded-lg flex flex-row items-center justify-center " +
                      classForBorderOFType
                    }
                  >
                    <div
                      className={
                        "w-[10px] h-[10px] rounded-[50%] " + classForType
                      }
                    ></div>
                  </div>
                  
                </div>
                <div>
                    <button
                      className="h-[40px] w-[120px] rounded-lg flex flex-row items-center justify-center outline-none cursor-pointer bg-white text-orange-400 text-xl shadow-md border-gray-400"
                      id={dish.id}
                      type="button"
                    >
                      <span>Remove</span>
                      <MdDeleteOutline size={20} className="m-0" />
                    </button>
                  </div>
              </div>
              <p className="w-[70%] text-sm text-gray-400">
                {dish.description} ...
                <button className="font-bold text-orange-300">Read more</button>
              </p>
            </div>
            <Link to={`/ingredients/${dish.id}`}>
              <button className="h-[40px] w-[130px] rounded-xl border-gray-300 outline-none cursor-pointer bg-white text-orange-400 text-md py-2 text-center">
                View Ingredients
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
