import SignUpForm from '../../components/signUpForm/SignUpForm'
import SideImage from '../../components/sideImage/SideImage'

function SignUp() {
  return (
<div className="w-[100vw] h-screen flex items-center justify-center">
      <main className="w-full flex items-center justify-center xl:grid xl:grid-cols-2">
        <div className="flex items-center justify-center w-full">
        <SignUpForm />
        </div>
        <div className="hidden xl:block">
        <SideImage />
        </div>
      </main>
    </div>    
  )
}

export default SignUp