import LoginForm from "../../components/loginForm/LoginForm";
import SideImage from "../../components/sideImage/SideImage";

function Login() {
  return (
    <div className="w-[100vw] h-screen flex items-center justify-center">
      <main className="w-full flex items-center justify-center xl:grid xl:grid-cols-2">
        <div className="flex items-center justify-center w-full">
        <LoginForm />
        </div>
        <div className="hidden xl:block">
        <SideImage />
        </div>
      </main>
    </div>
  );
}

export default Login;
