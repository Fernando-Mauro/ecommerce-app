import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../../Context/mainContext"

const firstUl = [
    {
        to: "/",
        text: "Shopi",
        className: "font-semibold text-lg"
    },
    {
        to: "/",
        text: "All",
        className: ""
    },
    {
        to: "/clothes",
        text: "Clothes",
        className: ""
    },
    {
        to: "/electronics",
        text: "Electronics",
        className: ""
    },
    {
        to: "/furnitures",
        text: "Furnitures",
        className: ""
    },
    {
        to: "/toys",
        text: "Toys",
        className: ""
    },
    {
        to: "/others",
        text: "Others",
        className: ""
    },
]

const secondUl = [
    {
        to: "/account",
        text: "ferma.dev@gmail.com",
        className: ""
    },
    {
        to: "/my-orders",
        text: "My orders",
        className: ""
    },
    {
        to: "/my-account",
        text: "My Account",
        className: ""
    },
    {
        to: "/sign-in",
        text: "Sign In",
        className: ""
    },
    {
        to: "/my-order",
        text: "My order",
        className: ""
    },
    {
        to: "🛒",
        text: `🛒`,
        className: ""
    }
]
export const Navbar = () => {
    const {cartCounter} = useContext(MainContext);
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base font-light top-0">
            <ul className="flex items-center gap-3">
                {
                    firstUl.map((link, index) => (
                        <li key={link.text} >
                            <NavLink to={link.to}
                                className={({ isActive }) =>
                                    (isActive && index !== 0? `${link.className} underline underline-offset-4` : `${link.className}`)
                                }>
                                {link.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex items-center gap-3">
                {
                    secondUl.map(link => (
                        <li key={link.text}>
                            <NavLink to={link.to}
                                className={({ isActive }) =>
                                    (isActive ? `${link.className} underline underline-offset-4` : `${link.className}`)
                                }
                            >
                                {link.text === "🛒" ? `🛒 ${cartCounter}` : link.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
