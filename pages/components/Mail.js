import React from 'react';


export default function Mail(){

return(
    <div>
    <div className="bg-green-300 p-5">
        <h1 className="py-3 px-1.5"> Get 15% off- Join our mailing list</h1>
        <p className="py-3 px-1.5">
            Be the first to get updates on special offers, <br></br>
             product launches, and insider exclusives
        </p>
        <input class=" p-4 border-b text-gray-800 border-black bg-green-300" placeholder="YOUR MAIL"/>
        <button>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
        </button>
    </div>
    
        </div>
    
)
}