import { useState, useEffect } from "react";
import "../index.css";

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return <footer className="footer">{time} Currently open</footer>;
};

export default Footer;
