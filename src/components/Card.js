import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info.substring(0,200)}`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (
        
        <div className="card border-4 border-black ">

            <div className="border-4border-indigo-500/100 bg-gradient-to-r from-slate-400 ">
                 <img src={image} className="image h-80 w-96 px-1 py-1"></img>
            </div>

            <div className="tour-info  px-3">
                    <div className="tour-details">
                    <h4 className="tour-price text-lime-600 text-2xl">₹ {price}</h4>
                    <h4 className="tour-name font-bold">{name}</h4>
            </div>

                <div className="description pb-10 ">
                    {description}
                    <span className="read-more text-sky-500" onClick={readmoreHandler}>
                        {readmore ? `....Show Less`: `....Read \More`}
                    </span>
                </div>
            </div>

            <div className="border-gray-50 flex justify-center pb-5 ">
                    <button className="bg-blue-600  hover:bg-blue-400 text-white font-bold py-2 px-4 border border-blue-700 rounded  " onClick={() => removeTour(id)}>
                        Not Interested
                    </button>
            </div>
        </div>
        
    );
}

export default Card;