import React, { useState,forwardRef } from "react";
import { useDispatch } from "react-redux";
import {updateUserDetails} from '../features/user/userSlice'

function Dialog({ user }, dialogBox){
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNo, setPhoneNo] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);

  const dispatch = useDispatch();

  const closeDialog = () => {
    dialogBox.current.close();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userObj = {
        id: user.id,
        name: name,
        email: email,
        phone: phoneNo,
      website: website,
    };
    dispatch(updateUserDetails(userObj))
    closeDialog()
  };

  return (
    <>
      <dialog
        ref={dialogBox}
        className="w-full max-w-lg rounded-lg bg-white shadow-lg"
      >
        <div className="dialog-header flex justify-between border-b-2 px-6 py-4">
          <h2 className="font-medium text-gray-700">Enter Details: </h2>
          <button onClick={closeDialog}>
            <svg
              className="text-gray-400 hover:text-gray-700"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 1024 1024"
            >
              <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0z" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="dialog-body grid grid-col-4 space-y-5 p-6 h-2/3">
            <div className="row1 flex items-center">
              <div className="flex justify-end w-1/3">
                <svg
                  className="text-red-500 mt-2"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v12m5.196-9L6.804 15m0-6 10.392 6" />
                </svg>
                <label htmlFor="name" className="mx-2">
                  Name:
                </label>
              </div>
              <input
                type="text"
                name="name"
                className="w-[70%] px-2 py-1 border-2 border-gray-300 hover:border-blue-500 rounded-md text-gray-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="row2 flex items-center">
              <div className="flex justify-end w-1/3">
                <svg
                  className="text-red-500 mt-2"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v12m5.196-9L6.804 15m0-6 10.392 6" />
                </svg>
                <label htmlFor="email" className="mx-2">
                  Email:
                </label>
              </div>
              <input
                type="email"
                name="email"
                className="w-[70%] px-2 py-1 border-2 border-gray-300 hover:border-blue-500 rounded-md text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="row3 flex items-center">
              <div className="flex justify-end w-1/3">
                <svg
                  className="text-red-500 mt-2"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v12m5.196-9L6.804 15m0-6 10.392 6" />
                </svg>
                <label htmlFor="phone" className="mx-2">
                  Phone:
                </label>
              </div>

              <input
                type="tel"
                name="phone"
                className="w-[70%] px-2 py-1 border-2 border-gray-300 hover:border-blue-500 rounded-md text-gray-500"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>

            <div className="row4 flex items-center">
              <div className="flex justify-end w-1/3">
                <svg
                  className="text-red-500 mt-2"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v12m5.196-9L6.804 15m0-6 10.392 6" />
                </svg>
                <label htmlFor="website" className="mx-2">
                  Website:
                </label>
              </div>

              <input
                type="text"
                name="website"
                className="w-[70%] px-2 py-1 border-2 border-gray-300 hover:border-blue-500 rounded-md text-gray-500"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 p-4 border-t-2">
            <button
              className=" text-gray-500 bg-slate-100 px-7 py-1 rounded-md border-2 border-gray-300 hover:text-blue-400 hover:bg-white hover:border-blue-400"
              onClick={closeDialog}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-400 px-8 py-1 rounded-md"
            >
              OK
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default forwardRef(Dialog);
