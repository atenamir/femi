import { Link } from 'react-router-dom'
import notFound from '../../assets/images/error.png'

function NotFoundPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <img src={notFound} alt="not found" width='450px'/>
      <h1 className='text-center text-lg'>Oops! <br />
         The page you’re looking for seems to have wandered off.</h1>
         <Link to='/'>
         <button className='mt-12 px-5 py-2 bg-pink-300 text-white rounded-lg cursor-pointer active:scale-95
         transition'>
          Back To Home</button>
         </Link>
    </div>
  )
}

export default NotFoundPage