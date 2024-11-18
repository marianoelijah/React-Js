import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between py-20">
          <div className="mb-6 md:mb-0">
            <h2 className="text-[70px] font-bold mb-2">TULOS</h2>
            <p className="text-sm opacity-50 py-4 font-semibold">Get newsletter update for upcoming product <br/> and best discount for all item</p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="border border-gray-300 bg-transparent px-4 py-2 rounded-full" />
              <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-5 rounded-full justify-between gap-2">Submit</button>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-black">Product</h3>
            <ul>
              <li><a href="/" className="font-semibold opacity-50">T-shirt</a></li>
              <li><a href="/" className="font-semibold opacity-50">Jacket</a></li>
              <li><a href="/" className="font-semibold opacity-50">Shoes</a></li>
              <li><a href="/" className="font-semibold opacity-50">Pants</a></li>
              <li><a href="/" className="font-semibold opacity-50">Sunglasses</a></li>
              <li><a href="/" className="font-semibold opacity-50">Tuxedo</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-black">Categories</h3>
            <ul>
              <li><a href="/" className="font-semibold opacity-50">Man</a></li>
              <li><a href="/" className="font-semibold opacity-50">Woman</a></li>
              <li><a href="/" className="font-semibold opacity-50">Kids</a></li>
              <li><a href="/" className="font-semibold opacity-50">Gift</a></li>
              <li><a href="/" className="font-semibold opacity-50">New Arrival</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-black">Our Social Media</h3>
            <ul>
              <li><a href="/" className="font-semibold opacity-50">Instagram</a></li>
              <li><a href="/" className="font-semibold opacity-50">Facebook</a></li>
              <li><a href="/" className="font-semibold opacity-50">Youtube</a></li>
              <li><a href="/" className="font-semibold opacity-50">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 bg-black">
          <p className="text-sm text-gray-400 hover:text-white">© 2023 Tulos Production</p>
          <ul className="flex space-x-4 gap-5 justify-end py-2"> 
            <li><a href="/" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="/" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;