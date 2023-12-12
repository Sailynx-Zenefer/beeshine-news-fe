import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <header>
        <h1>Beeshine News</h1>
        <p>🐝 ☀️ 📰</p>
      </header>
    </Link>
  );
};

export default Header;
