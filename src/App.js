// src/App.js

import React, { useState } from 'react';
import ChartComponent from './component/ChartComponent';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  const [limit1, setLimit1] = useState(0.3);
  const [limit2, setLimit2] = useState(0.08);

  const handleLimit1Change = (newLimit) => {
    setLimit1(newLimit);
  };

  const handleLimit2Change = (newLimit) => {
    setLimit2(newLimit);
  };

  return (
    <div className="relative w-screen bg-[#FAFAFA] flex flex-col items-center">
      <div className='w-screen'>
        <Navbar />
      </div>
      <div className='font-bold text-4xl text-center mt-4'>Comparison on Different Quantum Hardwares</div>

      <div className='my-4 w-[90%] md:w-[80%] pb-24 text-[#264653] bg-[#F2F2F2] rounded-3xl shadow-2xl p-4 md:p-10'>
        <div className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ad ullam dolorum. Quidem magnam quod omnis nemo illo perspiciatis aperiam inventore sunt cupiditate ex cum dolorum accusantium tempora laudantium, unde in harum veniam sit nam magni ab totam consequuntur odit reiciendis. Sunt culpa facilis similique tempora, ad neque delectus.
        </div>

        <div className=' flex items-center justify-center mt-14'>
          <ChartComponent xField="twoQubitsGateError" yField="qubitCount" regularDataLimit={limit1} />
          
        </div>
        <div className='flex justify-center'>
        <input
            type="range"
            min="0.0"
            max="1"
            step="0.001"
            value={limit1}
            onChange={(e) => handleLimit1Change(parseFloat(e.target.value))}
          />
          <input type="number" min="0" max="1" value={limit1} onChange={(e) => handleLimit1Change(parseFloat(e.target.value))}/>
        </div>
        <div className='flex items-center justify-center'>
          <ChartComponent xField="oneQubitGateError" yField="qubitCount" regularDataLimit={limit2} />
          
        </div>   
        <div className='flex justify-center'>
          <input
            type="range"
            min="0.0001"
            max="1"
            step="0.01"
            value={limit2}
            onChange={(e) => handleLimit2Change(parseFloat(e.target.value))}
          />
          <input type="number" min="0" max="1" value={limit2} onChange={(e) => handleLimit2Change(parseFloat(e.target.value))}/>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default App;
