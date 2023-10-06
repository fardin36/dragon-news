import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // Sign In using email and password
        signIn(email, password)
            .then(res => {
                console.log(res);
            })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-2/4 mx-auto text-center">
                <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] border-none">Login</button>
                    </div>
                </form>
                <p className="font-semibold">Dont’t Have An Account ? <Link to={'/register'} className="text-[#F75B5F]">Register</Link></p>
            </div>
        </div >
    );
};

export default Login;