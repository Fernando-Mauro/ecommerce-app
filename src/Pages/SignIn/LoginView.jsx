import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../../Context/mainContext"

export const LoginView = () => {
    const {setAccount, setLoginView, setHasAnAccount} = useContext(MainContext);

    const formRef = useRef(null);
    
    const createAnAccount = () => {
        const formData = new FormData(formRef.current);

        const data = {
            name : formData.get('name'),
            email : formData.get('email'),
            password :formData.get('password')
        }
        setAccount(data);
        setLoginView(true);
        setHasAnAccount(true);
    }

    return (
        <form className="flex flex-col gap-4" ref={formRef}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-light">
                    Your name:
                </label>
                <input type="text"
                    name="name"
                    id="name"
                    placeholder="Fernando"
                    className="rounded-lg border border-blac placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-light">
                    Your email:
                </label>
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="Fernando@mauro.com"
                    className="rounded-lg border border-blac placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="font-light">
                    Your Password:
                </label>
                <input type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="rounded-lg border border-blac placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                />
            </div>
            <Link to="/">
                <button
                    type="submit"
                    className="bg-black text-white w-full rounded-lg py-3"
                    onClick={createAnAccount}
                >
                    Create
                </button>
            </Link>
        </form>
    )
}
