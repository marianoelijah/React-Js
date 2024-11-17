import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import NewCollection from "./NewCollection";
import Match from "./Match";
import BoxCollection from "./BoxCollection";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner img="banner.jpg" header="#" subheader="#" />
      <NewCollection />
      <Match img="match.png" header="#" subheader="#"/>
      <BoxCollection />
      <Footer />
    </>
  );
};

export default Homepage;