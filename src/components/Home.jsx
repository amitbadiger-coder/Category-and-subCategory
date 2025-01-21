import React from "react";
import "./Home.scss";
import logo1 from "../images/logo1.jpg";

const Card = () => {
  return <img className="card" src={logo1} alt="cover" />;
};

const Row = ({
  title,
  arr = [
    {
      img: { logo1 },
    },
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {console.log(arr)}
        {arr.map((item) => (
          <Card/>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"AA-movies"} />
      <Row title={"Popular ones"} />
      <Row title={"Puspa series"} />
      <Row title={"My-List"} />
      <Row title={"others"} />
    </section>
  );
};

export default Home;
