import { useDispatch, useSelector } from "react-redux";

import { closeLogin } from "../../redux/actions/loginActions";

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoginOpen = useSelector((state) => state.loginReducer.isLoginOpen);

    if (!isLoginOpen) return null; // Eğer isLoginOpen false ise bileşeni göstermiyoruz.

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={() => dispatch(closeLogin())}
                >
                    ✖
                </button>
                <h2 className="text-xl font-semibold mb-4 text-center">Giriş Yap</h2>
                <input
                    type="email"
                    placeholder="E-posta"
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    className="w-full p-2 border rounded mb-4"
                />
                <button onClick={() => dispatch(closeLogin())} className="w-full bg-blue-500 text-white p-2 rounded">
                    Giriş Yap
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
