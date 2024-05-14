import React, { useState } from 'react';
import search from '../assets/search.svg';
import Calendar from './Calendar';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

function NavCalendar() {
  const [showSearch, setShowSearch] = useState(false)
  const [showGuests, setShowGuests] = useState(false)
  const [adultsCounter, setAdultsCounter] = useState(0)
  const [childrenCounter, setChildrenCounter] = useState(0)
  const [babyCounter, setBabyCounter] = useState(0)
  const [petsCounter, setPetsCounter] = useState(0)


  const showGuestsCounter = () => {
  const totalGuests = adultsCounter + childrenCounter + babyCounter;
    if (totalGuests === 0) {
      return "Hóspedes?";
    }
    let guestsText = `${totalGuests} hóspede${totalGuests > 1 ? 's' : ''}`;
    if (babyCounter > 0) {
      guestsText += `, ${babyCounter} b...`;
    }
    if (petsCounter > 0) {
      guestsText += `, ${petsCounter} a...`;
    }
    return guestsText;
  };

  const handleRemoveGuests = (counter: number, setCounter: { (value: React.SetStateAction<number>): void; (arg0: number): void; }) => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(0)
    }
  };

  const handleAddGuests = (counter: number, setCounter: { (value: React.SetStateAction<number>): void; (arg0: number): void; }) => {
    if (counter < 5) {
      setCounter(counter + 1)
    } else {
      setCounter(5)
    }
  };

  const handleAddPets = () => {
    if (adultsCounter === 0 && childrenCounter === 0 && babyCounter === 0) {
      setAdultsCounter(1);
    }
    setPetsCounter(petsCounter + 1);
  };
  
  const handleAddChildren = () => {
    if (adultsCounter === 0 && childrenCounter === 0) {
      setAdultsCounter(1);
    }
    setChildrenCounter(childrenCounter + 1);
  };

  const handleAddBaby = () => {
    if (adultsCounter === 0 && babyCounter === 0) {
      setAdultsCounter(1);
    }
    setBabyCounter(babyCounter + 1);
  };

  return (
    <div>
      <div className="rounded-full border flex flex-row border-gray-300 bg-gray-100 text-gray-700">
        <div className="px-8 py-3 mr-28 rounded-full cursor-pointer">
          <h2 className="text-xs text- font-semibold text-gray-700">Onde</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">Buscar destinos</span>
        </div>

        <div className="px-8 py-3 rounded-full cursor-pointer" onClick={() => { setShowSearch(!showSearch) }}>
          <h2 className="text-xs font-semibold text-gray-700">Check-in</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">Insira as datas</span>
        </div>

        <div className="px-8 py-3 rounded-full cursor-pointer" onClick={() => { setShowSearch(!showSearch) }}>
          <h2 className="text-xs font-semibold text-gray-700">Checkout</h2>
          <span className="text-gray-600 hover:text-gray-800 text-sm">Insira as datas</span>
        </div>

        <div className="px-8 py-3 mr-24 rounded-full cursor-pointer min-w-36 max-w-36 overflow-hidden whitespace-nowrap" onClick={() => { setShowGuests(!showGuests) }}>
          <h2 className="text-xs font-semibold text-gray-700">Quem</h2>
          <span className={`${adultsCounter >= 1 ? 'text-black font-black' : ''}text-gray-600 hover:text-gray-800 text-sm overflow-hidden`}>
            {showGuestsCounter()}
          </span>
        </div>

        <div className="px-4 py-4 mr-2 self-center rounded-full bg-[#FF385C] cursor-pointer">
          <img src={search} alt="search" className='w-5 h-5 fill-white' />
        </div>
      </div>

      {showSearch && <Calendar />}

      {showGuests &&
        <div className="absolute right-56 bg-white rounded-3xl shadow-xl p-11 max-w-[27rem]">

          <div className="flex space-x-16 items-center border-b-2 border-gray-100 py-3">
            <div className="w-full">
              <h1 className="font-semibold text-gray-800">Adultos</h1>
              <span className="text-sm text-gray-500 font-medium">13 anos ou mais</span>
            </div>

            <div className="flex items-center">
              {adultsCounter >= 1 && (
                <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mr-2"
                  onClick={() => handleRemoveGuests(adultsCounter, setAdultsCounter)} >
                  <img src={minus} alt='minus' className='w-12 h-4' />
                </button>
              )}
              <span>{adultsCounter}</span>
              <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mx-2"
                onClick={() => handleAddGuests(adultsCounter, setAdultsCounter)} >
                <img src={plus} alt='plus' className='w-12 h-4' />
              </button>
            </div>
          </div>


          <div className="flex space-x-16 items-center border-b-2 border-gray-100 py-3">
            <div className="w-full">
              <h1 className="font-semibold text-gray-800">Crianças</h1>
              <span className="text-sm text-gray-500 font-medium">De 2 a 12 anos</span>
            </div>

            <div className="flex items-center">
              {childrenCounter >= 1 && (
                <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mr-2"
                  onClick={() => handleRemoveGuests(childrenCounter, setChildrenCounter)} >
                  <img src={minus} alt='minus' className='w-12 h-4' />
                </button>)}
              <span>{childrenCounter}</span>
              <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mx-2"
                onClick={handleAddChildren} >
                <img src={plus} alt='plus' className='w-12 h-4' />
              </button>
            </div>
          </div>


          <div className="flex space-x-16 items-center border-b-2 border-gray-100 py-3">
            <div className="w-full">
              <h1 className="font-semibold text-gray-800">Bebês</h1>
              <span className="text-sm text-gray-500 font-medium">Menor de 2</span>
            </div>
            <div className="flex items-center">
              {babyCounter >= 1 && (
                <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mr-2"
                  onClick={() => handleRemoveGuests(babyCounter, setBabyCounter)} >
                  <img src={minus} alt='minus' className='w-12 h-4' />
                </button>)}
              <span>{babyCounter}</span>
              <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mx-2"
                onClick={handleAddBaby} >
                <img src={plus} alt='plus' className='w-12 h-4' />
              </button>
            </div>
          </div>

          <div className="flex space-x-16 items-center border-b-2 border-gray-100 pt-3">
            <div className="w-full">
              <h1 className="font-semibold text-gray-800">Animais de estimação</h1>
              <span className="text-sm text-gray-600 font-medium underline">Vai levar um animal de serviço?</span>
            </div>
            <div className="flex items-center">
              <button className="invisible text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mr-2">
                <img src={minus} alt='minus' className='w-12 h-4' />
              </button>
              {petsCounter >= 1 && (
                <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mr-2"
                  onClick={() => handleRemoveGuests(petsCounter, setPetsCounter)} >
                  <img src={minus} alt='minus' className='w-12 h-4' />
                </button>)}
              <span>{petsCounter}</span>
              <button className="text-gray-600 border border-gray-400 rounded-full cursor-pointer p-1 mx-2"
                onClick={handleAddPets} >
                <img src={plus} alt='plus' className='w-12 h-4' />
              </button>
            </div>
          </div>

        </div>
      }

    </div>
  );
}

export default NavCalendar;
