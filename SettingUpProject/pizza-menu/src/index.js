import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

//Constants
const hour = new Date().getHours();
const openHour = 6;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;
  // if (soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>Price :{price}</h3>
        <p>ingredients:{ingredients}</p>

        <span>soldOut:{soldOut ? "Yes" : "NO"}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {" "}
        {isOpen ? (
          pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          ))
        ) : (
          <p>We are currently Closed ,Restaurant will Open at 10AM to 10PM </p>
        )}
      </ul>
    </main>
  );
}
function Footer() {
  const message = `We are currently ${isOpen ? `Open` : `Close`}`;

  return (
    <footer className="footer">{isOpen ? <Order /> : <p> {message}</p>}</footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We`re open until {closeHour}:00. Come Visit us or Order Online </p>
      <button className="btn">Order</button>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);
