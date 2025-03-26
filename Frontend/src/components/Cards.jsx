import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 np-3">
      <div className="card bg-base-100 w-92 shadow-sm dark:bg-slate-900 dark:text-white dark:border 
          transform transition duration-200 hover:scale-105 hover:shadow-xl hover:bg-pink-300 overflow-hidden">
        <figure>
          <img src={item.image} alt="Book Cover" className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>

          {/* ✅ Show URL for free books */}
          {item.price === 0 && item.url && (
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 underline hover:text-blue-700"
            >
              Read Now
            </a>
          )}

          <div className="card-actions flex justify-between">
            {/* ✅ Show "Free" if price is 0, otherwise display ₹price */}
            <div className="badge badge-outline">
              {item.price > 0 ? `₹${item.price}` : "Free"}
            </div>
            <div className="badge badge-outline rounded-full border-[2px] cursor-pointer px-2 py-1 
                hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
