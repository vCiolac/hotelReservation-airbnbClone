import React, { useState } from 'react';
import search from '../assets/search.svg';
import Calendar from './Calendar';

function NavCalendar() {
  const [showSearch, setShowSearch] = useState(false)
  const [showGuests, setShowGuests] = useState(false)
  const [adultsCounter, setAdultsCounter] = useState(0)
  const [childrenCounter, setChildrenCounter] = useState(0)
  const [infantCounter, setInfantCounter] = useState(0)

  return (
    <div>

      <div className="rounded-full border flex flex-row border-gray-300 bg-gray-100 text-gray-700">
        <div className="px-8 py-3 mr-28 rounded-full cursor-pointer">
          <h2 className="text-xs text- font-bold text-gray-700">Onde</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">Buscar destinos</span>
        </div>

        <div className=" px-8 py-3 rounded-full cursor-pointer" onClick={() => { setShowSearch(!showSearch) }}>
          <h2 className="text-xs font-bold text-gray-700">Check-in</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">Insira as datas</span>
        </div>

        <div className=" px-8 py-3 rounded-full cursor-pointer" onClick={() => { setShowSearch(!showSearch) }}>
          <h2 className="text-xs font-bold text-gray-700">Checkout</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">Insira as datas</span>
        </div>

        <div className=" px-8 py-3 mr-28 rounded-full cursor-pointer" onClick={() => { setShowGuests(!showGuests) }}>
          <h2 className="text-xs font-bold text-gray-700">Quem</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">{adultsCounter + childrenCounter + infantCounter} Hóspedes?</span>
        </div>

        <div className="px-4 py-4 mr-2 self-center rounded-full bg-[#FF385C] cursor-pointer">
          <img src={search} alt="search" className='w-5 h-5 fill-white' />
        </div>
      </div>
      {showSearch && <Calendar />}
      {showGuests &&
        <div className="absolute bg-white right-60 rounded-xl shadow-xl p-8">

          <div className="flex space-x-14 items-center border-b-2 border-gray-100 py-3">
            <div>
              <h1 className="font-bold">Adults</h1>
              <span className="text-sm">Ages 13 or above</span>
            </div>

            <div className="flex items-center space-x-3">
              <button className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                onClick={() => {
                  if (adultsCounter > 0) {
                    setAdultsCounter(adultsCounter - 1)
                  } else {
                    setAdultsCounter(0)
                  }
                }} />
              <span>{adultsCounter}</span>
              <button className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                onClick={() => {
                  if (adultsCounter < 5) {
                    setAdultsCounter(adultsCounter + 1)
                  } else {
                    setAdultsCounter(5)
                  }
                }}
              />
            </div>
          </div>


          <div className="flex flex-grow flex-row items-center border-b-2 border-gray-100 py-3">
            <div className="w-full">
              <h1 className="font-bold">Children</h1>
              <span className="text-sm">Ages 2-12</span>
            </div>

            <div className="flex items-center flex-row justify-end space-x-3">
              <button className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                onClick={() => {
                  if (childrenCounter > 0) {
                    setChildrenCounter(childrenCounter - 1)
                  } else {
                    setChildrenCounter(0)
                  }
                }}
              />
              <span>{childrenCounter}</span>
              <button className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                onClick={() => {
                  if (childrenCounter < 5) {
                    setChildrenCounter(childrenCounter + 1)
                  } else {
                    setChildrenCounter(5)
                  }
                }}
              />
            </div>
          </div>


          <div className="flex space-x-14 items-center border-b-2 border-gray-100 py-3">
            <div className="w-full">
              <h1 className="font-bold">Infants</h1>
              <span className="text-sm">Under 2</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                onClick={() => {
                  if (infantCounter > 0) {
                    setInfantCounter(infantCounter - 1)
                  } else {
                    setInfantCounter(0)
                  }
                }}
              />
              <span>{infantCounter}</span>
              <button className="text-gray-600 border border-gray-300 rounded-full cursor-pointer p-1"
                onClick={() => {
                  if (infantCounter < 5) {
                    setInfantCounter(infantCounter + 1)
                  } else {
                    setInfantCounter(5)
                  }
                }}
              />
            </div>
          </div>

        </div>
      }

    </div>
  );
}

export default NavCalendar;
