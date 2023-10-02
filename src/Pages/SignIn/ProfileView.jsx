import { useContext } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../../Context/mainContext"

export const ProfileView = () => {
    const { setLoginView, account, setSignOut, hasAnAccount, setAccount, setHasAnAccount } = useContext(MainContext);
    const { email, password } = account;
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
            {
                hasAnAccount ?
                    <Link to="/">
                        <button className="bg-black disable:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2" onClick={() => {
                            setSignOut(true);
                            setAccount({});
                            setHasAnAccount(false);
                        }}
                            disabled={hasAnAccount}

                        >
                            Log Out
                        </button>
                    </Link>
                    :
                    <Link to="/">
                        <button className="bg-black disable:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                            disabled={!hasAnAccount}
                        >
                            Log In
                        </button>
                    </Link>

            }
            <button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
                onClick={() => { setLoginView(false) }}
            >
                Sign up
            </button>
        </div>
    )
}
