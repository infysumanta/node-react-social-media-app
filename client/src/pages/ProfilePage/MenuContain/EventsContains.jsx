import React from "react";

const EventsContains = () => {
  return (
    <div className="w-full bg-white h-auto mt-2 shadow-sm rounded-lg border py-2 px-5">
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl font-bold">Events</h1>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-1">Your Events</h1>
      </div>
      <div className="text-center text-xl italic p-10 border rounded">
        You are not part of any events.
      </div>
      <div>
        <h1 className="text-xl font-bold mt-3">Upcoming Events</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-3">
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
    </div>
  );
};

const EventItem = () => {
  return (
    <div className=" w-full rounded-lg flex items-start justify-start border shadow p-1">
      <div className="min-w-28 bg-blue-50 min-h-28 font-medium">
        <div className="w-28 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center  border">
          <div className="block rounded-t overflow-hidden  text-center ">
            <div className="bg-blue-600 text-white py-1">March</div>
            <div className="pt-1 border-l border-r border-white bg-white">
              <span className="text-3xl font-bold leading-tight">17</span>
            </div>
            <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white mb-1">
              <span className="text-sm">Sunday</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col ml-4 justify-center h-full">
        <span className="font-bold">Advance Search Engine Optimization</span>
        <span className="italic ">29 Nov - 30 Nov</span>
        <span className="text-sm">34 Sector, Element Tower</span>
        <span className="text-sm">Bangalore, India</span>
      </div>
    </div>
  );
};

export default EventsContains;
