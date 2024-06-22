// src/App.js

import React, { useState } from 'react';
import ErrorChartComponent from './component/ErrorChartComponent';
import MaxErrorChartComponent from './component/MaxErrorChartComponent';
import LogChartComponent from './component/LogChartComponent';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  const [limit1, setLimit1] = useState(0.3);
  const [limit2, setLimit2] = useState(0.08);
  const [limit3, setLimit3] = useState(0.3);
  const [limit4, setLimit4] = useState(0.3);
  const [limit5, setLimit5] = useState(0.3);
  const [limit6, setLimit6] = useState(10000000);
  const [limit7, setLimit7] = useState(3000000);

  const handleLimit1Change = (newLimit) => {
    if (newLimit >= 0 && newLimit <= 0.4) {
      setLimit1(newLimit);
    }
  };

  const handleLimit2Change = (newLimit) => {
    if (newLimit >= 0 && newLimit <= 0.1) {
      setLimit2(newLimit);
    }
  };

  const handleLimit3Change = (newLimit) => {
    if (newLimit >= 0 && newLimit <= 0.3) {
      setLimit3(newLimit);
    }
  };

  const handleLimit4Change = (newLimit) => {
    if (newLimit >= 0 && newLimit <= 0.3) {
      setLimit4(newLimit);
    }
  };
  const handleLimit5Change = (newLimit) => {
    if (newLimit >= 0 && newLimit <= 0.3) {
      setLimit5(newLimit);
    }
  };
  const handleLimit6Change = (newLimit) => {
    if (newLimit >= 0 && newLimit<=100000000000) {
      setLimit6(newLimit);
    }
  };
  const handleLimit7Change = (newLimit) => {
    if (newLimit >= 0 && newLimit<=3000000) {
      setLimit7(newLimit);
    }
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
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Qubit Count V/S Two Qubits Gate Error</div>
        <div className='flex flex-col items-center justify-center mt-14'>
          <ErrorChartComponent xField="twoQubitsGateError" yField="qubitCount" regularDataLimit={limit1} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0.0"
              max="0.4"
              step="0.001"
              value={limit1}
              onChange={(e) => handleLimit1Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max="0.4"
              step="0.001"
              value={limit1}
              onChange={(e) => handleLimit1Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>
        <div className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ad ullam dolorum. Quidem magnam quod omnis nemo illo perspiciatis aperiam inventore sunt cupiditate ex cum dolorum accusantium tempora laudantium, unde in harum veniam sit nam magni ab totam consequuntur odit reiciendis. Sunt culpa facilis similique tempora, ad neque delectus.
        </div>
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Qubit Count V/S One Qubits Gate Error</div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <ErrorChartComponent xField="oneQubitGateError" yField="qubitCount" regularDataLimit={limit2} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.001"
              value={limit2}
              onChange={(e) => handleLimit2Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max="0.1"
              step="0.001"
              value={limit2}
              onChange={(e) => handleLimit2Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>
        <div className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ad ullam dolorum. Quidem magnam quod omnis nemo illo perspiciatis aperiam inventore sunt cupiditate ex cum dolorum accusantium tempora laudantium, unde in harum veniam sit nam magni ab totam consequuntur odit reiciendis. Sunt culpa facilis similique tempora, ad neque delectus.
        </div>
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Time Stamp V/S Readout Error</div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <ErrorChartComponent xField="readoutError" yField="timeStamp" regularDataLimit={limit3} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0.0"
              max="0.3"
              step="0.001"
              value={limit3}
              onChange={(e) => handleLimit3Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max="0.3"
              step="0.001"
              value={limit3}
              onChange={(e) => handleLimit3Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>
        
        <div className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ad ullam dolorum. Quidem magnam quod omnis nemo illo perspiciatis aperiam inventore sunt cupiditate ex cum dolorum accusantium tempora laudantium, unde in harum veniam sit nam magni ab totam consequuntur odit reiciendis. Sunt culpa facilis similique tempora, ad neque delectus.
        </div>
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Qubit Count V/S Maximum Error</div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <MaxErrorChartComponent yField="qubitCount" regularDataLimit={limit4} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0.0"
              max="0.3"
              step="0.001"
              value={limit4}
              onChange={(e) => handleLimit4Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max="0.3"
              step="0.001"
              value={limit4}
              onChange={(e) => handleLimit4Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>
        <div className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ad ullam dolorum. Quidem magnam quod omnis nemo illo perspiciatis aperiam inventore sunt cupiditate ex cum dolorum accusantium tempora laudantium, unde in harum veniam sit nam magni ab totam consequuntur odit reiciendis. Sunt culpa facilis similique tempora, ad neque delectus.
        </div>
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Qubit Count V/S Readout Error</div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <ErrorChartComponent xField="readoutError" yField="qubitCount" regularDataLimit={limit5} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0.0"
              max="0.3"
              step="0.001"
              value={limit5}
              onChange={(e) => handleLimit5Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max="0.3"
              step="0.001"
              value={limit5}
              onChange={(e) => handleLimit5Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>
        <div className='my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ad ullam dolorum. Quidem magnam quod omnis nemo illo perspiciatis aperiam inventore sunt cupiditate ex cum dolorum accusantium tempora laudantium, unde in harum veniam sit nam magni ab totam consequuntur odit reiciendis. Sunt culpa facilis similique tempora, ad neque delectus.
        </div>
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Qubit Count V/S log(T1 time)</div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <LogChartComponent xField="coherenceTimeT1" yField="qubitCount" regularDataLimit={limit6} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0.0"
              max='10000000000'
              step="10000000"
              value={limit6}
              onChange={(e) => handleLimit6Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max='10000000000'
              step="10000000"
              value={limit6}
              onChange={(e) => handleLimit6Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>
        <div className='text-3xl p-2 text-[#36a7a7] underline'>Qubit Count V/S log(T2 time)</div>

        <div className='flex flex-col items-center justify-center mt-10'>
          <LogChartComponent xField="coherenceTimeT2" yField="qubitCount" regularDataLimit={limit7} />
          <h1 className='font-bold mt-2'>Change the limit of the graph: </h1>
          <div className='flex items-center mt-4'>
            <input
              type="range"
              min="0.0"
              max='3000000'
              step="100000"
              value={limit7}
              onChange={(e) => handleLimit7Change(parseFloat(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max='3000000'
              step="100000"
              value={limit7}
              onChange={(e) => handleLimit7Change(parseFloat(e.target.value))}
              className="ml-4 p-2 border border-gray-300 rounded-lg w-20 text-center"
            />
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default App;
