import "../index.css";

const Pizza = (prop) => {
  return (
    <li className="pizza">
      <img src={prop.photo} alt="" />
      <div>
        <h3>{prop.pizzaName}</h3>
        <p>{prop.ingredients}</p>
        <span>{prop.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
