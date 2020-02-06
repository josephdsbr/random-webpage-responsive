import React from "react";
import './styles.scss';
import NavBar from '../../components/Navbar';
import JumboTron from '../../components/JumboTron';
import CardList from '../../components/CardList';
import Typography from '../../components/Typography';

const Home: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <JumboTron />
      <CardList />
      <Typography />
    </div>
  );
};

export default Home;
