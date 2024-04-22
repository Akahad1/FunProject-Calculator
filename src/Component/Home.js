import React, { useEffect, useState } from 'react';
import Button from './Button';
import Inputs from './Inputs'

const Home = () => {
  
  // state of entered value and result
  const [val, setVal] = useState(0);

  // No allow to add number after '='
  var status__number = false;
  var last_char = val[val.length - 1];
  try { if (val.toString().includes('=')) status__number = true } catch (err) { }

  // var new_val = val;
  if (last_char === '/' || last_char === '*' || last_char === '-' || last_char === '+' || last_char === '=') {
    last_char = true;

  } else {
    last_char = false;
  }

  // numbers click function
  function ButtonClk(e) {
    return (
      // checking placeholder of first impression (0)
      // checking (=) for disallow adding number or operator
      val === 0 ? setVal(e.target.innerText) : status__number ? setVal(val.toString().replace(val.slice(val.indexOf('='),), "" + e.target.innerText)) : setVal(val + "" + e.target.innerText)
    )
  }

  // operators click function
  function Operation(e) {
    return (
      !last_char ? !status__number ? setVal(val + "" + e.target.innerText) : setVal(val.toString().replace(val.slice(val.indexOf('='),), "" + e.target.innerText)) : setVal(val.slice(0, -1) + e.target.innerText)
    )
  }

  // enter (=) click function
  function Enter(e) {
    var result;
    var status = false;
    try { if (val.length) { result = eval(val); status = true } } catch (ex) { }

    return (
      status ? !last_char ? setVal(val + "" + e.target.innerText + result) : setVal(0) : setVal(0)
    )

  }

  /* eslint no-eval: 0 */
  function Clear() {
    setVal(0)
  }

  // backspace function 
  function BackCR() {
    // try { setVal(val[val.indexOf('='), -1]) } catch (err) { console.log(err) }
    // try {
    //   if (val.toString().includes('=')) { setVal(val.slice(val.indexOf('='),)) }
    //   else {

    if (val.length > 1) { setVal(val.slice(0, -1)) } else { setVal(0) }
    //   }
    // } catch (err) { }
    // // console.log(val.toString())
  }


  // const [count, setCount] = useState(0);
  useEffect(() => {
    document.getElementById("display").focus();
  });




    const [showData,setShowData]=useState(0)
    const [shonka,setShonka]=useState(0)
    console.log(shonka)
    const CalculateData=()=>{


    }
    return (
        <div>

<div className="minHe">
        < div className="Calculator" >
         
          <div className="padd__box"><Inputs value={val} /></div>
          <div className="Operations">

            <div className="parent">
              <Button onClick={BackCR} cls="cls">←</Button>
              <Button onClick={Clear} cls="cls">C</Button>
              <Button cls="buttons__si" onClick={Operation}>/</Button>
              <Button cls="buttons__si" onClick={Operation}>*</Button>
            </div>


            <div className="parent">
              <Button onClick={ButtonClk}>7</Button>
              <Button onClick={ButtonClk}>8</Button>
              <Button onClick={ButtonClk}>9</Button>
              <Button cls="buttons__si" onClick={Operation}>-</Button>

            </div >


            <div className="parent">
              <Button onClick={ButtonClk}>4</Button>
              <Button onClick={ButtonClk}>5</Button>
              <Button onClick={ButtonClk}>6</Button>
              <Button cls="buttons__si" onClick={Operation}>+</Button>
            </div >

            <div className="parent">
              <Button onClick={ButtonClk}>1</Button>
              <Button onClick={ButtonClk}>2</Button>
              <Button onClick={ButtonClk}>3</Button>
              <Button onClick={Enter} cls="buttons__si equals">=</Button>
            </div>
            <div className="parent last__pa">
              <Button onClick={ButtonClk} cls="dot" >0</Button>
              <Button onClick={ButtonClk}>.</Button>
              <Button cls='noneBtn'>=</Button>

            </div>
            {/* <Button onClick={Enter}>=</Button> */}
            {/* <Button>X</Button>
          <Button>X</Button> */}
          </div>

        </div >

      </div >


          {/* <div className='mt-32 mb-20'>
            <div>
                <h1 className='lg:text-4xl text-3xl text-white text-center'>CALCULATOR</h1>
            </div>
            <div className='w-9/12 lg:h-16 h-12 bg-slate-700 m-auto lg:mt-10 mt-6  flex justify-end'><p className='text-white text-3xl mt-3 mr-5'>{shonka}</p></div>
              {/* 1st line */}
            {/* <div className='m-auto w-9/12 flex '>
                
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
               2st line
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
            {/* <div className='m-auto w-9/12 flex '>
                
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
            {/* <div className='m-auto w-9/12 flex '>
                
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
        //     </div> */}
              {/* 5st line */}
        {/* //     <div className='m-auto w-9/12 flex '>
                
        //     <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 lg:ml-3 mr-2">
        //         <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] text-center md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0  '>0</button>

        //     </div>
        //     <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
        //         <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>/</button>

        //     </div>
        //     <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md lg:mr-14 mr-2">
        //         <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>.</button>

        //     </div>
        //     <div className="bg-gray-100 lg:h-16 lg:w-60 md:w-44 md:h-14 h-12 w-20 mt-6 rounded-md">
        //         <button className='text-black lg:text-center lg:text-3xl md:text-3xl text-3xl lg:ml-[120px] md:ml-16 md:mt-2 ml-6  mt-1 lg:mt-3 lg:mr-0 '>=</button>

        //     </div>
        //     </div>
        // </div>  */}
        </div>
    );
};

export default Home;