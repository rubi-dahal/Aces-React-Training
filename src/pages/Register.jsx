// Signin.jsx
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const details = Object.fromEntries(formData);
    try {
      const res = await axios.post(
        "https://687af359abb83744b7ee4691.mockapi.io/user",
        details
      );

      if (res) {
        e.target.reset();
        toast.success("Registered Successfully!");
        navigate("/signin");
      }
    } catch (err) {
      toast.error("Registeration failed!");
      console.error(err);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0b0f1a] font-sans">
      <div className="container relative w-[350px] bg-white/5 rounded-[15px] p-6 text-center shadow-md backdrop-blur">
        <button
          onClick={goBack}
          className="w-[30px] h-[30px] absolute top-2 right-2 text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          x
        </button>
        <h2 className="text-white text-2xl font-bold mb-6">REGISTER</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group mb-4 text-left">
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded bg-white/10 text-white text-sm outline-none"
            />
          </div>

          <div className="input-group mb-6 text-left">
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-2 rounded bg-white/10 text-white text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-[#1f2d52] text-white font-bold hover:bg-[#293b6a] transition-colors"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
