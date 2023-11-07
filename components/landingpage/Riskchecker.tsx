"use client";
import React, { Fragment, useEffect, useState } from 'react'
import { CustomButton } from '../CustomButton'
import CustomFilter from '../CustomFilter'
import { fuels, riskLevel } from '@/constants'
import { makeRequest } from '@/utils/httpResquest'



import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";

export const Riskchecker = () => {
   const [riskScore,setRiskScore] = useState(7)
   const [risk,setRisk] = useState([])
   const [selected, setSelected] = useState(riskLevel[0]); 
  
    //filter states
    const getRisk = async() =>{
     const result =  await makeRequest(riskScore)
     console.log({result:result?.risk})
     setRisk(result?.risk)

    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          await getRisk();
          // Handle successful result or state updates here
        } catch (error) {
          // Handle errors here
        }
      };
  
      fetchData();
    }, [riskScore]);
  const [fuel, setFuel] = useState("");
  return (
    <>
  
            <div className='text-center mb-5'>
             <h2 className='font-bold text-3xl text-white  md:text-5xl'>Risk Checker</h2>
            </div>

       <div className='relative bg-customgreen w-[1000px] h-[460px] self-center rounded-2xl flex items-start justify-center'>
            <div className='flex items-center justify-center w-[420px] h-[73px] absolute rounded-2xl bg-custom '>
                    {/* <CustomFilter title='fuel' options={riskLevel} setFilter={setFuel}/> */}
                    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          setFuel(e.value);
          setRiskScore(Number(selected.title)) // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className='relative w-fit z-10'>
          {/* Button for the listbox */}
          <Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border'>
            <span className='block truncate text-slate-800'>{selected.title}</span>
            <Image src='/assets/svg/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {/* Map over the options and display them as listbox options */}
              {riskLevel.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-blue-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
            </div>
            <div className='bg-white px-2 flex w-[950px] h-[300px] mt-32 rounded-tl-none rounded-tr-none rounded-br-2xl rounded-bl-2xl'>
              {risk?.length && (
                <table className='h-full w-full'>
                  <tbody>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Nigerian Stocks</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].nigerianStocks}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Foreign Stocks</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].foreignStocks}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Tech Stocks</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].techStocks}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Emerging Stocks</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].emergingStocks}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Nigerian Bonds</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].nigerianBonds}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Foreign Bonds</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].foreignBonds}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'> commodities</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].commodities}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Real Estate</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].realEstate}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>T Bills</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].tBills}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 className='font-medium text-black text-base md:text-xl'>Alternative</h4>
                      </td>
                      <td>
                        <p className='font-normal text-black text-sm md:text-lg'>{risk[0].alternative}</p>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              )}
            </div>

        </div>

        


    </>
  )
}
