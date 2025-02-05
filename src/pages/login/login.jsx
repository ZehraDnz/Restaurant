
import { useDispatch } from 'react-redux'
import { openLogin } from '../../redux/actions/loginActions';



const Login = () => {
    const dispatch= useDispatch
    
 

    return (
        <nav className="flex justify-end p-4 bg-gray-800 text-white">
            <button
                className="px-4 py-2 bg-blue-500 rounded"
                onClick={() => dispatch(openLogin())}
            >
                Login
            </button>
        </nav>
    );
};
export default Login