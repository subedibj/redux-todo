import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  removeTodo,
} from "../lib/Redux/Actions/index";
import { MdBorderColor, MdDeleteForever } from "react-icons/md";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // @ts-ignore
  const itemsData = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  console.log(itemsData.length, "length");

  return (
    <>
      <div className="my-60 mx-auto w-1/3 h-auto bg-purple-500 text-center p-2 flex flex-col gap-8 py-8">
        <h1 className="text-white capitalize">redux todo list</h1>

        <div className="flex flex-row space-x-3 justify-center items-center">
          <input
            type="text"
            placeholder="add items..."
            className="py-1 px-2 rounded-md"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />

          <button
            className="rounded-md text-white px-4 py-1 bg-green-400"
            // @ts-ignore
            onClick={() => dispatch(addTodo(inputData), setInputData(" "))}
          >
            {toggleButton ? "UPDATE" : "ADD"}
          </button>
        </div>

        {itemsData.map((item, index) => {
          return (
            <div className="text-center flex flex-row space-x-4 justify-center">
              <div
                key={item.id}
                className="text-white flex flex-row space-x-4 items-center"
              >
                <span>{index + 1}.</span>
                <MdDeleteForever
                  className="text-red-200 h-6 w-6 cursor-pointer hover:text-red-400"
                  onClick={() => dispatch(deleteTodo(item.id))}
                />
                <MdBorderColor
                  className="text-green-500 hover:text-green-300 cursor-pointer w-6 h-5"
                  onClick={() =>
                    // @ts-ignore
                    dispatch(editTodo(item.id), setToggleButton(true))
                  }
                />
              </div>
            </div>
          );
        })}
        <div className="text-center">
          {itemsData.length > 1 ? (
            <button
              className="rounded-md text-white w-1/2 px-4 py-1 bg-red-400"
              onClick={() => dispatch(removeTodo())}
            >
              Clear All
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Home;
