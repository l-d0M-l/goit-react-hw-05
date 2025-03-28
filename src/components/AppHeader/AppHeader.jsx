import css from "./AppHeader.module.css";
import { NavLink } from "react-router";
import clsx from "clsx";
function AppHeader() {
  const linkCssStyle = ({ isActive }) => {
    return clsx(css.linkNormal, isActive && css.active);
  };
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={linkCssStyle}>
              Home
            </NavLink>
          </li>
          <NavLink to="/movies" className={linkCssStyle}>
            Movies
          </NavLink>
          <li> </li>
        </ul>
      </nav>
    </header>
  );
}
export default AppHeader;
