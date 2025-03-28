import { NavLink } from "react-router";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <>
      <NavLink to="/" className={css.backBtn}>Home Page</NavLink>
    </>
  );
}

export default NotFoundPage;
