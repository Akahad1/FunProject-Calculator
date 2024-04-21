import React, { useState } from 'react';

const Home = () => {

    const [showData,setShowData]=useState(0)
    const [shonka,setShonka]=useState(0)
    console.log(shonka)
    return (
        <div className='mt-32 mb-20'>
            <div>
                <h1 className='lg:text-4xl text-3xl text-white text-center'>CALCULATOR</h1>
            </div>
            <div className='w-9/12 lg:h-16 h-12 bg-slate-700 m-auto lg:mt-10 mt-6  flex justify-end'><p className='text-white text-3xl mt-3 mr-5'>{showData}</p></div>
              {/* 1st line */}
            <div className='m-auto w-9/12 flex '>
                
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 lg:ml-3 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] text-center md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>(</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>)</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>C</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>X</button>

            </div>
            </div>
              {/* 2st line */}
            <div className='m-auto w-9/12 flex '>
                
            <div onClick={()=>setShonka(7)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 lg:ml-3 mr-2">
                <button  className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] text-center md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>7</button>

            </div>
            <div onClick={()=>setShonka(8)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button   className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>8</button>

            </div>
            <div  onClick={()=>setShonka(9)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button  className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>9</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>+</button>

            </div>
            </div>
              {/* 3st line */}
            <div className='m-auto w-9/12 flex '>
                
            <div  onClick={()=>setShonka(4)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 lg:ml-3 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] text-center md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>4</button>

            </div>
            <div  onClick={()=>setShonka(5)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>5</button>

            </div>
            <div  onClick={()=>setShonka(6)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>6</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>-</button>

            </div>
            </div>
              {/* 4st line */}
            <div className='m-auto w-9/12 flex '>
                
            <div  onClick={()=>setShonka(1)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 lg:ml-3 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] text-center md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>1</button>

            </div>
            <div  onClick={()=>setShonka(2)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>2</button>

            </div>
            <div  onClick={()=>setShonka(3)} className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>3</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>%</button>

            </div>
            </div>
              {/* 5st line */}
            <div className='m-auto w-9/12 flex '>
                
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 lg:ml-3 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] text-center md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>0</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>/</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>.</button>

            </div>
            <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md">
                <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>=</button>

            </div>
            </div>
        </div>
    );
};

export default Home;