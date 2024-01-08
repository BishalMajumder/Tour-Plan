import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh  flex justify-center my-48  ">
          <div className="w-48 h-16 bg-grar">

          <div className="text-1xl text-cyan-600 my-4 ">No Tours Left</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded " onClick={() => setTours(data)}>
            Refresh
          </button>

          </div>
        </div>
    );
  }

  return (
    <div className="bg-slate-100">

        <div className="flex justify-center py-6">
               <div className="title flex justify-center  text-5xl w-1/2 border-4 border-indigo-200 border-y-indigo-500 rounded-lg bg-gradient-to-r from-indigo-500 ...">Tour Plan </div>
        </div>

         <div className="App flex justify-center">
            <div>
                <Tours tours={tours} removeTour={removeTour}></Tours>
            </div>
         </div>

    </div>
  )
};

export default App;
