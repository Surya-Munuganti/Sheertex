import React from 'react';
import Translator from './Translator';


export default function Navb(){

return(
    <navbar className="bg-white shadow-lg">
    <div>
    <div className="container-fluid bg-gray-300 h-6 mx-auto px-4 md:flex">
      
      <div className="text-center">Flash Sale 15% of everything + free shipping</div>
    </div>
</div>
    <div className="container-fluid bg-white-500 mx-auto px-4 border-solid border-4 border-light-blue-500 ..." >
   <div className="flex items-center justify-between h-16">
   <div className="flex items-center">

    <div href="#" className="hover:bg-pink-100 px-8">TIGHTS</div>
    <div href="#" className="hover:bg-pink-100 px-8">STOCKINGS</div>
    <div href="#" className="hover:bg-pink-100 px-8">SOCKS & ACCESSORIES</div>
    
    </div>
    <h1 className="text-center px-8 font-serif text-4xl">Sheertex</h1>
    
    <div className="flex justify-between md:flex">
    <a href="#" className="hover:bg-pink-100 px-8">OUR KNIT</a>
    <a href="#" className="hover:bg-pink-100 px-8">OUR STORY</a>
    </div>
    <div  className="flex space-x-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

    </div>
    <Translator></Translator>
  


</div>

</div>

</navbar>
)
}