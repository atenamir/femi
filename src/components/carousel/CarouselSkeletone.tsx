function CarouselSkeletone() {
  return (
    <div className='bg-pink-200 p-1 mx-2 min-w-[170px] my-5 rounded-md h-[340px] flex 
    flex-col  justify-between shadow-lg'>
        <div className='w-[150px] mx-auto mt-3 animate-pulse h-[150px] bg-pink-100 rounded'></div>
        <div className='w-full'>
        <div className='w-[96%] bg-pink-100 animate-pulse h-[8px] rounded'></div>
        <div className='w-[40%] mt-3 bg-pink-100 animate-pulse h-[8px] rounded'></div>
        </div>
        <div className='w-[40%] mt-3 bg-pink-100 animate-pulse h-[8px] rounded'></div>
        <div className='w-[60%] mx-auto mb-3 bg-pink-100 animate-pulse h-9 rounded'></div>   
    </div>
  )
}

export default CarouselSkeletone