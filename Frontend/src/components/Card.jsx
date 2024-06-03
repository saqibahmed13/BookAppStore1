import React from "react";

function Card({item}) {     // yahan wo map ka array aajata pura usme se hame jo hona selec karlena so
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.image}    // item aaga parent(Freebooks) div se usme se humna image hona
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;