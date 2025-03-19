import React from "react";

function Cards({ item }) {
  return (
    <>
    <div className="mt-4 my-3np-3">
    <div className="card bg-base-100 w-92 shadow-sm hover:bg-pink-300 scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img src={item.image} alt="Shoes" className="h-48 w-full  object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className="badge badge-outline rounded-full border-[2px] cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div> {/* Fixed Here */}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;

