import logo from "../../assets/images/logo.png"; // Import logo image
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form for form handling
import { TSignUpForm } from "./type"; // Import type for form data
import { z } from "zod"; // Import Zod for schema validation
import { zodResolver } from "@hookform/resolvers/zod"; // Import zodResolver to connect Zod with react-hook-form
import { CiLock, CiUser } from "react-icons/ci"; // import lock icon
import { PiSpinnerLight } from "react-icons/pi"; // import spinner icon
import { SignUpAPI } from "../../utils/APIs/signUpAPI/SignUpAPI"; // import login api for post user's info
import { toast } from "react-toastify"; // import react toastify
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

function SignUpForm() {
  //  === define use navigate ===
  const navigate = useNavigate();
  //=== Define the validation schema using Zod===
  const mySchema = z
    .object({
      name: z.string().min(4, "youre name should have at least 4 character"),
      email: z
        .string()
        .min(5, "Your email should have at least 5 characters")
        .email("Invalid email"),
      password: z
        .string()
        .min(3, "Your password should have at least 3 characters"),
      avatar: z.string(),
    })
    .refine(
      (data: TSignUpForm) =>
        (data.avatar =
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fionicframework.com%2Fdocs%2Fapi%2Favatar&psig=AOvVaw0xf4qZF1iqygRwreSvnwKJ&ust=1742632416929000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiCqenhmowDFQAAAAAdAAAAABAE")
    );

  // ===Use react-hook-form with Zod resolver for form validation===
  const {
    register, //=== Function to register each form field===
    handleSubmit, //=== Function to handle form submission===
    formState: { errors, isSubmitting }, // ===Access form errors===
  } = useForm<TSignUpForm>({ resolver: zodResolver(mySchema) });

  //  === function for posting user's info for logging ===
  const handleLogin = async (data: TSignUpForm) => {
    try {
      const res = await SignUpAPI(data);
      console.log(data);
      
      if (res?.status == 200 || res?.status == 201) {
        toast.success("registration succssesfully ...");
        navigate("/login");
      } else {
        toast.error("somthing goes wrong. please try later");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className=" flex flex-col p-2 items-center justify-center w-full  md:shadow md:border
       md:border-gray-200 md:rounded-2xl md:w-[530px] md:h-[31rem] "
      //=== Handle form submission and log form data===
      onSubmit={handleSubmit(async (data: TSignUpForm) => handleLogin(data))}
    >
      {/* === Logo === */}
      <img src={logo} alt="femi logo" width="150px" className="mx-auto" />

      <fieldset className="w-full  flex flex-col p-2 items-center justify-center">
        {/* === name input field === */}
        <label
          htmlFor=""
          className="w-[80%] mt-3 font-sans  text-[.7rem] sm:text-lg text-pink-600 flex items-center"
        >
          <MdOutlineDriveFileRenameOutline className="mx-1" /> name :
        </label>
        <input
          type="text"
          className={`bg-gray-200 rounded my-2 p-2 w-[80%]  text-[.7rem] sm:text-lg outline-none focus:border
          transition ${
            errors.name?.message
              ? "border-red-400 bg-red-100"
              : "border-gray-300"
          }`}
          placeholder="Your email address"
          {...register("name")} // ===Register name field with react-hook-form===
        />
        {/*=== Display error message for name field=== */}
        {errors.name && (
          <p className="w-[80%] text-red-500">{errors.name.message}</p>
        )}
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
        {/* === avatar === */}
        <input type="text" hidden {...register("avatar")} />
        {/* === Submit Button === */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer text-l w-[80%] bg-pink-300 rounded mt-3 p-1 transition
         active:bg-pink-600 text-white"
        >
          {!isSubmitting ? (
            "Sign up"
          ) : (
            <span className=" w-full flex items-center justify-center">
              Registering <PiSpinnerLight className="animate-spin " />
            </span>
          )}
        </button>
      </fieldset>
      <Link to="/login" className="mt-5 text-[.8em] cursor-default">
        already have an account?{" "}
        <span className="text-pink-500 cursor-pointer">login</span>
      </Link>
    </form>
  );
}

export default SignUpForm;
