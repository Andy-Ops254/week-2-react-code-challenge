import React from 'react'

function Nav  ()  {
    return (
    <nav className='bg-[#169976] '>
    <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div>
            <a href='#' className="text-amber-50 font-extrabold text-xl font-serif"> ANDY.RIM</a>
        </div>
    
        <ul className='flex space-x-8'>
            <li><a href="#" className='text-white font-semibold hover:text-gray-300 transition-colors'>HOME</a></li>
            <li><a href="#" className='text-white font-semibold hover:text-gray-300 transition-colors'>ABOUT</a></li>
            <li><a href='#' className='text-white font-semibold hover:text-gray-300 transition-colors'></a></li>
        </ul>
    </div>
    </nav>
  )
}

export default Nav