import React from 'react'

const Header = () => {
  return (
    <header className="w-full h-16 bg-transparent backdrop-blur-xl flex items-center justify-between px-5">
      <h1 className="text-4xl leading-none text-white font-serif">Logo</h1>
      <ul className="flex">
        <li className="mx-3 px-4 py-2 cursor-pointer text-white hover:text-black hover:bg-white ease-out duration-500 rounded-md "><a href="#">Home</a></li>
        <li className="mx-3 px-4 py-2 cursor-pointer text-white hover:text-black hover:bg-white ease-out duration-500 rounded-md  "><a href="#">Product</a></li>
        <li className="mx-3 px-4 py-2 cursor-pointer text-white hover:text-black hover:bg-white ease-out duration-500 rounded-md  "><a href="#">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header