import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink 
                    to="/"
                > 
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/"
                > 
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/c"
                > 
                    Shopi
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
