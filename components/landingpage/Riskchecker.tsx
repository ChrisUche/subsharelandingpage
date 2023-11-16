import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { makeRequest } from '@/utils/httpResquest';
import { riskLevel } from '@/constants';

export const Riskchecker = () => {
  const [riskScore, setRiskScore] = useState(7);
  const [risk, setRisk] = useState<any[]>([]);
  const [selected, setSelected] = useState(riskLevel[0]);

  const getRisk = async () => {
    const result = await makeRequest(riskScore);
    console.log({ result: result?.risk });
    setRisk(result?.risk);
  };

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

  const [fuel, setFuel] = useState('');

  return (
    <>
      <div className='text-center mb-5'>
        <h2 className='font-bold text-3xl text-white md:text-5xl'>Risk Checker</h2>
      </div>

      <div className='relative bg-customgreen w-full md:w-[1000px] self-center rounded-2xl flex items-start justify-center'>
        <div className='flex items-center justify-center w-full md:w-[420px] h-[73px] md:absolute rounded-2xl bg-custom'>
          <div className='w-fit'>
            <Listbox
              value={selected}
              onChange={(e) => {
                setSelected(e); // Update the selected option in state
                setFuel(e.value);
                setRiskScore(Number(selected.title)) // Update the URL search parameters and navigate to the new URL
              }}
            >
              <div className='relative w-full z-10'>
                {/* Button for the listbox */}
                <Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border'>
                  <span className='block truncate text-slate-800'>{selected.title}</span>
                  <Image
                    src='/assets/svg/chevron-up-down.svg'
                    width={20}
                    height={20}
                    className='ml-4 object-contain'
                    alt='chevron_up-down'
                  />
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
                            active ? 'bg-blue-600 text-white' : 'text-gray-900'
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
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
        <div className='bg-white px-2 flex w-full md:w-[950px] h-auto md:h-[300px] mt-6 md:mt-32 rounded-tl-none rounded-tr-none rounded-br-2xl rounded-bl-2xl'>
          {risk?.length && (
            <table className='w-full'>
              <tbody>
                {riskProperties.map((property) => (
                  <tr key={property.key}>
                    <td>
                      <h4 className='font-medium text-black text-base md:text-xl'>{property.label}</h4>
                    </td>
                    <td>
                      <p className='font-normal text-black text-sm md:text-lg'>{risk[0][property.key]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

// Define an array for risk properties to avoid repeating similar code for each property
const riskProperties = [
  { key: 'nigerianStocks', label: 'Nigerian Stocks' },
  { key: 'foreignStocks', label: 'Foreign Stocks' },
  { key: 'techStocks', label: 'Tech Stocks' },
  { key: 'emergingStocks', label: 'Emerging Stocks' },
  { key: 'nigerianBonds', label: 'Nigerian Bonds' },
  { key: 'foreignBonds', label: 'Foreign Bonds' },
  { key: 'commodities', label: 'Commodities' },
  { key: 'realEstate', label: 'Real Estate' },
  { key: 'tBills', label: 'T Bills' },
  { key: 'alternative', label: 'Alternative' },
];
