import logo from "../../assets/images/logo.png"; // Import logo image
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form for form handling
import { ThookFormType } from "./type"; // Import type for form data
import { z } from "zod"; // Import Zod for schema validation
import { zodResolver } from "@hookform/resolvers/zod"; // Import zodResolver to connect Zod with react-hook-form
import { CiLock, CiUser } from "react-icons/ci"; // import lock icon
import { PiSpinnerLight } from "react-icons/pi"; // import spinner icon
import { loginAPI } from "../../utils/APIs/loginAPI/loginAPI"; // import login api for post user's info
import { toast } from "react-toastify";
import { setCookie } from "../../utils/helper/cookie";
import { useStore } from "../../store/authStore/store";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../utils/APIs/getUserProfile/getUserProfile";



function LoginForm() {
  const navigate = useNavigate()
  
  const { setState } = useStore();
  //=== Define the validation schema using Zod===
  const mySchema = z.object({
    email: z
      .string()
      .min(5, "Your email should have at least 5 characters")
      .email("Invalid email"),
    password: z
      .string()
      .min(3, "Your password should have at least 3 characters"),
  });
  // ===Use react-hook-form with Zod resolver for form validation===
  const {
    register, //=== Function to register each form field===
    handleSubmit, //=== Function to handle form submission===
    formState: { errors, isSubmitting }, // ===Access form errors===
  } = useForm<ThookFormType>({ resolver: zodResolver(mySchema) });

  //  === function for posting user's info for logging ===
  const handleLogin = async (data: ThookFormType) => {
    const res = await loginAPI(data);

    if (res?.status == 201 || res?.status == 200) {
      toast.success("welcome ...");
      //  ===get refresh and access tokens
      const refresh_token = res?.data?.refresh_token;
      const access_token = res?.data?.access_token;

      //  === set tokens in cookie ===
      setCookie("keyVal", {
        refresh_token: refresh_token,
        access_token: access_token,
      });
      // === set in useStore ===
      setState({ refresh_token: refresh_token, access_token: access_token });
      //  ==== get user profile ===
      const user = await getUserProfile();
      // === set it in localStorage ===
      if (user?.id) {
        localStorage.setItem("userId", user.id.toString());
      }  
      // === redirecting to cart ===
    
      navigate('/cart') 
    } else {
      toast.error("something went wrong. try later.");
    }
  };

  return (
    <form
      className=" flex flex-col p-2 items-center justify-center w-full  md:shadow md:border
       md:border-gray-200 md:rounded-2xl md:w-[530px] md:h-[26rem] "
      //=== Handle form submission and log form data===
      onSubmit={handleSubmit(async (data: ThookFormType) => handleLogin(data))}
    >
      {/* === Logo === */}
      <img src={logo} alt="femi logo" width="150px" className="mx-auto" />

      <fieldset className="w-full  flex flex-col p-2 items-center justify-center">
        {/* === Email Input Field === */}
        <label className="w-[80%] mt-3 font-sans  text-[.7rem] sm:text-lg text-pink-600 flex items-center">
          <CiUser className="mx-1" />
          email:
        </label>
        <input
          type="email"
          className={`bg-gray-200 rounded my-2 p-2 w-[80%]  text-[.7rem] sm:text-lg outline-none focus:border
          transition ${
            errors.email?.message
              ? "border-red-400 bg-red-100"
              : "border-gray-300"
          }`}
          placeholder="Your email address"
          {...register("email")} // ===Register email field with react-hook-form===
        />
        {/*=== Display error message for email field=== */}
        {errors.email && (
          <p className="w-[80%] text-red-500">{errors.email.message}</p>
        )}

        {/* === Password Input Field === */}
        <label className="w-[80%] mt-3 font-sans  text-[.7rem] sm:text-lg text-pink-600 flex items-center">
          <CiLock className="mx-1" />
          password:
        </label>
        <input
          type="text"
          className={`bg-gray-200 rounded text-[.7rem] sm:text-lg my-2 p-2 w-[80%]  outline-none focus:border
          transition ${
            errors.password?.message
              ? "border-red-400 bg-red-100"
              : "border-gray-300"
          }`}
          placeholder="Your password"
          {...register("password")}
        />
        {/* ===Display error message for password field ===*/}
        {errors.password && (
          <p className="w-[80%] text-red-500">{errors.password.message}</p>
        )}

        {/* === Submit Button === */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer text-l w-[80%] bg-pink-300 rounded mt-3 p-1 transition
         active:bg-pink-600 text-white"
        >
          {!isSubmitting ? (
            "Login"
          ) : (
            <span className=" w-full flex items-center justify-center">
              Logging <PiSpinnerLight className="animate-spin " />
            </span>
          )}
        </button>
      </fieldset>
      <Link to="/signUp" className="mt-5 text-[.8em] cursor-default">
        Do not have an account?{" "}
        <span className="text-pink-500 cursor-pointer">sign up</span>
      </Link>
    </form>
  );
}

export default LoginForm;
