import Head from 'next/Head'
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Moto from './components/Moto';
import Mail from './components/Mail';
import Translator from './components/Translator';
import Navb from './components/Navb';
import Image from 'next/image';



export default function Home() {
  return (
    <div>
   <Navb></Navb>
   <div>
    <div className="flex flex-row justify-between bg-gray-300 ">
    <div class =" flex row justify-evenly px-40 py-20 ">
    <div class="p-10">
    <img class="mx-auto p-10" src='/images/free.png ' alt="" height="150" width="150"/>
    <h1 className="text-center font-bold">FREE SHIPPING</h1>
    <p className="text-center">Same day shipping is included on all orders</p>
    </div>
    <div class="p-10">
      <img className='mx-auto p-10' src='/images/guarantee.png' alt="" height="150" width="150"/>
    <h1 className="text-center font-bold">30-DAY GUARANTEE</h1>
    <p className="text-center">Covers any damage that makes your tights unwearable</p>
    </div>
    <div class="p-10">
      <img className='mx-auto p-10' src='/images/dumbells.png' alt="" height="150" width="150"/>
    <h1 className="text-center font-bold">STRENGTH TESTED</h1>
    <p className="text-center">Rated 5 stars by thousands of happy customers</p>
    </div>
    </div>
    </div>
    </div>
    <footer className="flex flex-row justify-between p-10 md:flex">
    <Mail></Mail>
    <About></About>
    <Shop></Shop>
    <Contact></Contact>
    <Moto></Moto>
    </footer>
    <div className="flex flex-row justify-start md:flex">
    
    <p class=" px-10">SELECT YOUR CURRENCY</p>
    <p class=" px-12">CAD</p>
    <p class="item-center px-16  text-gray-500">
    &copy; 2021 Sheertex. All Rights reserved.
  </p>
  <p class="justify-end  text-gray-500">
    FOLLOW US
  </p>

  <div class="px-1">
  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M16,3H8C5.243,3,3,5.243,3,8v8c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V8C21,5.243,18.757,3,16,3z M19,16c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V16z"/><path d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5S14.757 7 12 7zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 15 12 15zM17 6A1 1 0 1 0 17 8 1 1 0 1 0 17 6z"/></svg>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
    </div>
    </div>
    );

}
