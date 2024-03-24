import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-3xl text-center mt-20 text-red-500 font-extrabold">Ooppppppppppp!!</h2>
            <Link className="text-3xl rounded p-5 flex justify-center" to='/'><button className="btn bg-slate-400 text-white">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;