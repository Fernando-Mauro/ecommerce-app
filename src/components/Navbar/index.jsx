import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MainContext } from "../../Context/mainContext"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
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
        to: "/jewelery",
        text: "Jewelery",
        className: ""
    },
    {
        to: "/men's clothing",
        text: "Men's",
        className: ""
    },
    {
        to: "/electronics",
        text: "Electronics",
        className: ""
    },
    {
        to: "/women's clothing",
        text: "Women's",
        className: ""
    },
]


export const Navbar = () => {
    const { cartCounter, setSignOut , signOut} = useContext(MainContext)
    const handleSignOut = () => {
        setSignOut(false);
    };
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
            text: signOut ? "Sign Out" : "Sign In",
            className: "",
            onClick: signOut ? handleSignOut : undefined
        },
        {
            to: "/my-order",
            text: "My order",
            className: ""
        },
        {
            to: "🛒",
            text: <ShoppingCartIcon className="h-6 w-6" />,
            className: ""
        },
        {
            to: "/",
            text: cartCounter,
            className: ""
        }
    ]
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base font-light top-0">
            <ul className="flex items-center gap-3">
                {
                    firstUl.map((link, index) => (
                        <li key={link.text} >
                            <NavLink to={link.to}
                                className={({ isActive }) =>
                                    (isActive && index !== 0 ? `${link.className} underline underline-offset-4` : `${link.className}`)
                                }>
                                {link.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex items-center gap-3">
                {
                    secondUl.map((link) => (
                        <li key={link.text}>
                            {/* Utiliza un onClick si está presente en la definición del enlace */}
                            {link.onClick ? (
                                <button
                                    onClick={link.onClick}
                                    className={link.className}
                                    style={{ cursor: "pointer" }}
                                >
                                    {link.text === <ShoppingCartIcon /> ? (
                                        <ShoppingCartIcon />
                                    ) : (
                                        link.text
                                    )}
                                </button>
                            ) : (
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${link.className} underline underline-offset-4`
                                            : `${link.className}`
                                    }
                                >
                                    {link.text === <ShoppingCartIcon /> ? (
                                        <ShoppingCartIcon />
                                    ) : (
                                        link.text
                                    )}
                                </NavLink>
                            )}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
