import sideImg from '../../assets/images/sideImg.jpg'

function SideImage() {
  return (
    <aside className='w-full h-screen flex items-center justify-end'>
    <img src={sideImg} alt="cosmetic" className='h-screen brightness-40'/>
  </aside>
  )
}

export default SideImage