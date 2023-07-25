import React, { useState } from 'react'
import '../App.css'

const Card = () => {
    const [purchase,setPurchase] = useState('1000')
    const [interest,setInterest] = useState('0')
    const [years,setYears] = useState('1')

    const handleSliderChange = (event) => {
        setPurchase(event.target.value);
      };

    const handleInterestChange = (event) => {
        setInterest(event.target.value);
      };

    const handleYears = (event) => {
        setYears(event.target.value);
      };

    const months = 12
    const totalAmountToSend = purchase * months * years
    const totalAmountInReturnFloats = totalAmountToSend + ((totalAmountToSend/100)*interest)
    const totalAmountInReturn = totalAmountInReturnFloats.toFixed(2)
      
      

  return (
    <div>
        <div className='container'>
            <div className='content'>
                <div className='heading'>
                    Mutual Fund Return Calculator
                </div>
                <span >
                <label className='amount' for="purchase-price">SIP Amount: {` ${purchase}₹`}</label>
                <input className='slider-1' type="range" id="purchase-price" value={purchase} onInput={handleSliderChange}
                min='100'  max='100000'  step='100'></input>
                </span>

                <span>
                <label className='amount' for="interest-rate">Interest Rate: {` ${interest}%`}</label>
                <input className='slider-2' type="range" id="interest-rate" value={interest} onInput={handleInterestChange}
                min='-150'  max='150'  step='.1'></input>
                
                </span>

                <span>
                <label className='amount' for="number-of-years">Number of years: {` ${years}`}</label>
                <input className='slider-3' type="range" id="number-of-years" value={years} onInput={handleYears}
                min='1'  max='20'  step='1'></input>
                </span>

                {
                interest < 0 ? (
                <div className='return-amount-negative'>
                Total Amount in Return: {totalAmountInReturn}₹ ({interest}%)
                </div>
                ) : interest>0 ?(
                <div className='return-amount-positive'>
                Total Amount in Return: {totalAmountInReturn}₹ ({interest}%)
                </div>
                ): (
                <div className='return-amount-zero'>
                Total Amount in Return:{totalAmountInReturn}₹ ({interest}%)
                </div>
                )
                }

                <p className='summary'>The best way to measure your investing success is not by whether you're beating the market but by whether you've put in place a financial plan and a behavioral discipline that are likely to get you where you want to go</p>
                
  
                
            </div>
        </div>
    </div>
  )
}

export default Card