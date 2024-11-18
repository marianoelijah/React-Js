import React from 'react';
import { imgPath } from '../helpers/functions-general';
import { Link } from 'react-router-dom';

const Match = ({ img }) => {
  return (
    <section className="Match">
    <div className="container pt-40">
      <div className="wrapper">
        <img
          src={`${imgPath}/${img}`}
          alt=""
          className=" w-full rounded-3xl h-[300px] object-cover"
        />
        <div className="match__contents flex bottom-10 left-20 justify-center text-black w-[90vw] px-10">
          <div className="match__text max-w-[1000px]">
            <h1 className="pb-1 py-4 font-semibold">WEAR TO WEDDING</h1>
            <p className="font-bold opacity-50">
              A symphony of exquisite designs tailored for your unforgetable moments.
            </p>
          </div>
          <button className="match__btn mb-20 py-5 flex-end">
            <Link to="/" className="text-white bg-black py-2 px-5 rounded-full font-semibold text-xs">
              See Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Match;
