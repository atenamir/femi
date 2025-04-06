import { Link } from 'react-router-dom'
import doesntLoggedIn from '../../../assets/images/doesntLoggedIn.png'

function DoesntLoggedIn() {
  return (
    <div className='h-[80vh] w-[90%] mx-auto flex flex-col items-center justify-center'>
    <img src={doesntLoggedIn} alt="doesnt logged in image" width='650px' />
    <h1 className='text-center font-medium my-4 text-xl'>Looks like you're not logged in yet!</h1>
    <h3 className='text-lg'> Sign in to fill your cart with amazing finds</h3>
   <button className='my-6 w-30 bg-pink-300 p-2 rounded-lg text-white active:scale-90 transition'>
    <Link to='/login'>Login</Link>
   </button>
    </div>
  )
}

export default DoesntLoggedIn