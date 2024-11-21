import "../index.css";

const Pizza = (prop) => {
  return (
    <li className="pizza">
      <div>
        <img src={prop.photo} alt="" />
      </div>
      <div style={{ width: "100%" }}>
        <h3>{prop.pizzaName}</h3>
        <p>{prop.ingredients}</p>
        <div className="pizza-add">
          <span>{prop.price}.00$</span>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </li>
  );
};

export default Pizza;
