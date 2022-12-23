import React from "react";

const PhotosContain = () => {
  return (
    <div className="w-full bg-white h-auto mt-2 shadow-lg rounded-lg border py-2 px-5">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold">Photos</h1>
        <button className="bg-pink-700 rounded  p-2 mt-5 text-white shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out">
          Add Photos
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    </div>
  );
};

const Photo = () => {
  return (
    <div>
      <div className="w-full bg-gray-200 h-48 rounded-lg shadow-xl cursor-pointer">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="photos"
          className="w-full h-full object-cover rounded-lg shadow-xl object-center"
        />
      </div>
    </div>
  );
};

export default PhotosContain;
