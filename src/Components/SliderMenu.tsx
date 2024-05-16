import React, { useContext, useState } from 'react';
import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
import casasNaArvore from '../assets/sliderabnb/casas-na-arvore.jpg';
import casasTriangulares from '../assets/sliderabnb/casas-triangulares.jpg';
import chales from '../assets/sliderabnb/chales.jpg';
import design from '../assets/sliderabnb/design.jpg';
import emFrenteAPraia from '../assets/sliderabnb/em-frente-a-praia.jpg';
import espacosAdaptados from '../assets/sliderabnb/espacos-adaptados.jpg';
import fazendas from '../assets/sliderabnb/fazendas.jpg';
import ilhas from '../assets/sliderabnb/ilhas.jpg';
import lago from '../assets/sliderabnb/lago.jpg';
import mansoes from '../assets/sliderabnb/mansoes.jpg';
import microcasas from '../assets/sliderabnb/microcasas.jpg';
import noInterior from '../assets/sliderabnb/no-interior.jpg';
import parquesNacionais from '../assets/sliderabnb/parques-nacionais.jpg';
import piscinasIncriveis from '../assets/sliderabnb/piscinas-incriveis.jpg';
import pousadas from '../assets/sliderabnb/pousadas.jpg';
import tropical from '../assets/sliderabnb/tropica.jpg';
import vinhedos from '../assets/sliderabnb/vinhedos.jpg';
import vistasIncriveis from '../assets/sliderabnb/vistas-incriveis.jpg';
import iconicos from '../assets/sliderabnb/iconicos.webp';
import { Context } from '../Context/Context';

interface Option {
  nome: string;
  img: string;
}

const options: Option[] = [
  { nome: 'Icônicos', img: iconicos },
  { nome: 'Chalés', img: chales },
  { nome: 'Vistas incríveis', img: vistasIncriveis },
  { nome: 'Em frente à praia', img: emFrenteAPraia },
  { nome: 'Fazendas', img: fazendas },
  { nome: 'Espaços adaptados', img: espacosAdaptados },
  { nome: 'Design', img: design },
  { nome: 'Parques nacionais', img: parquesNacionais },
  { nome: 'No interior', img: noInterior },
  { nome: 'Vinhedos', img: vinhedos },
  { nome: 'Microcasas', img: microcasas },
  // { nome: 'Piscinas incríveis', img: piscinasIncriveis },
  // { nome: 'Pousadas', img: pousadas },
  // { nome: 'Tropical', img: tropical },
  // { nome: 'Ilhas', img: ilhas },
  // { nome: 'Casas na árvore', img: casasNaArvore },
  // { nome: 'Casas triangulares', img: casasTriangulares },
  // { nome: 'Lago', img: lago },
  // { nome: 'Mansões', img: mansoes },
];

function SliderMenu() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { headerVisible } = useContext(Context);

  const handleButtonClick = (buttonName: string) => {
    const selected = options.find(option => option.nome === buttonName);
    if (selected) {
      setSelectedOption(selected);
    }
  };

  const handleRightArrow = () => {
    setArrowClicked(true);
  };

  const handleLeftArrow = () => {
    setArrowClicked(false);
  };

  return (
    <div className={`${headerVisible ? 'top-48' : 'top-20 min-h-24'} fixed w-full flex justify-center bg-white items-center`}>
      {arrowClicked && (
        <button onClick={handleLeftArrow} className="p-1 rounded-full border border-gray-500 bg-white">
          <img src={leftArrow} alt="arrow" className="w-4 h-4" />
        </button>
      )}
      <div className={`w-full ${arrowClicked ? 'ml-8 mr-14' : 'ml-14 mr-14'} grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-20`} >
        {options.map((option, index) => (
          <div className={`flex flex-col align-middle text-center justify-center items-center hover:bg-gray-200 hover:shadow-lg hover:rounded-lg hover:text-black`} key={index}>
            <button className={`${selectedOption === option ? 'underline underline-offset-[13px] decoration-2' : ''}  pb-3 flex flex-col align-middle text-center justify-center items-center`} onClick={() => handleButtonClick(option.nome)}>
              <img
                src={option.img}
                alt={option.nome}
                key={index}
                className="w-7 h-7 filter grayscale hover:fill-black "
              />
              <span className="text-xs font-medium mt-2 text-gray-600 whitespace-nowrap">{option.nome}</span>
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleRightArrow} className="p-1 rounded-full border border-gray-500 bg-white mr-12">
        <img src={rightArrow} alt="arrow" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SliderMenu;