import { Link } from "react-router-dom"

export const LoginView = ({email, password, hasAccount}) => {
    return (
        <div className="flex flex-col w-80">
            <p>
                <span className="font-light text-sm">Email: </span>
                <span> {email} </span>
            </p>
            <p>
                <span className="font-light text-sm"> Password</span>
                <span> {password} </span>
            </p>
            <Link to="/">
                <button className="bg-black disable:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                    disabled={hasAccount}
                >
                    Log In
                </button>
            </Link>
        </div>
    )
}
