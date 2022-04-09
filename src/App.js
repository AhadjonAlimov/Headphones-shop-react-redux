import React from 'react';
import './App.scss';
import Header from "./components/header";
import CardList from "./components/CardList";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;

