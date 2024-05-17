import { useContext, useEffect, useState } from 'react';
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
import acampamentos from '../assets/sliderabnb/acampamentos.jpg';
import barcos from '../assets/sliderabnb/barcos.jpg';
import casasArredondadas from '../assets/sliderabnb/casasArredondadas.jpg';
import casasBarco from '../assets/sliderabnb/casasBarco.jpg';
import casasDeTerra from '../assets/sliderabnb/casasDeTerra.jpg';
import castelos from '../assets/sliderabnb/Castelos.jpg';
import cidadesFamosas from '../assets/sliderabnb/cidadesFamosas.jpg';
import containeres from '../assets/sliderabnb/containeres.jpg';
import diversao from '../assets/sliderabnb/diversao.jpg';
import espacosCriativos from '../assets/sliderabnb/espacosCriativos.jpg';
import naBeiraDoLago from '../assets/sliderabnb/naBeiraDoLago.jpg';
import uau from '../assets/sliderabnb/uau.jpg';
import artico from '../assets/sliderabnb/artico.jpg';
import energiaAlternativa from '../assets/sliderabnb/energiaAlternativa.jpg';
import grutas from '../assets/sliderabnb/grutas.jpg';
import cozinhasGourmet from '../assets/sliderabnb/cozinhasGourmet.jpg';
import deserto from '../assets/sliderabnb/deserto.jpg';
import emAlta from '../assets/sliderabnb/emAlta.jpg';
import luxe from '../assets/sliderabnb/luxe.jpg';
import praia from '../assets/sliderabnb/praia.jpg';
import quartos from '../assets/sliderabnb/quartos.jpg';
import surfe from '../assets/sliderabnb/surfe.jpg';
import { Context } from '../Context/Context';
import { AnimatePresence, motion } from 'framer-motion';

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
  { nome: 'Piscinas incríveis', img: piscinasIncriveis },
  { nome: 'Pousadas', img: pousadas },
  { nome: 'Tropical', img: tropical },
  { nome: 'Ilhas', img: ilhas },
  { nome: 'Casas na árvore', img: casasNaArvore },
  { nome: 'Casas triangulares', img: casasTriangulares },
  { nome: 'Lago', img: lago },
  { nome: 'Mansões', img: mansoes },
  { nome: 'Acampamentos', img: acampamentos },
  { nome: 'Barcos', img: barcos },
  { nome: 'Casas arredondadas', img: casasArredondadas },
  { nome: 'Casas-Barco', img: casasBarco },
  { nome: 'Casas de terra', img: casasDeTerra },
  { nome: 'Castelos', img: castelos },
  { nome: 'Cidades famosas', img: cidadesFamosas },
  { nome: 'Contêineres', img: containeres },
  { nome: 'Diversão', img: diversao },
  { nome: 'Espaços criativos', img: espacosCriativos },
  { nome: 'Na beira do lago', img: naBeiraDoLago },
  { nome: 'Uau!', img: uau },
  { nome: 'Ártico', img: artico },
  { nome: 'Energia alternativa', img: energiaAlternativa },
  { nome: 'Grutas', img: grutas },
  { nome: 'Cozinhas gourmet', img: cozinhasGourmet },
  { nome: 'Deserto', img: deserto },
  { nome: 'Em alta', img: emAlta },
  { nome: 'Luxe', img: luxe },
  { nome: 'Praia', img: praia },
  { nome: 'Quartos', img: quartos },
  { nome: 'Surfe', img: surfe },
];

function SliderMenu() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { headerVisible } = useContext(Context);
  const [page, setPage] = useState(0);
  const [sidePage, setSidePage] = useState('');
  const [visibleOptions, setVisibleOptions] = useState<Option[]>([]);
  const [key, setKey] = useState<string>('');
  const [optionsPerPage, setOptionsPerPage] = useState<number>(calculateOptionsPerPage());

  useEffect(() => {
    function handleResize() {
      setOptionsPerPage(calculateOptionsPerPage());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const startIndex = page * optionsPerPage;
    const endIndex = startIndex + optionsPerPage;
    const newVisibleOptions = options.slice(startIndex, endIndex);
    setVisibleOptions(newVisibleOptions);
    setKey(Date.now().toString());
  }, [page]);

  function calculateOptionsPerPage() {
    const screenWidth = window.innerWidth;
    let optionsPerRow = 4;
    if (screenWidth >= 640) {
      optionsPerRow = 6;
    }
    if (screenWidth >= 768) {
      optionsPerRow = 8;
    }
    if (screenWidth >= 1024) {
      optionsPerRow = 11;
    }
    if (screenWidth >= 1440) {
      optionsPerRow = 16;
    }
    return optionsPerRow;
  }

  const handleButtonClick = (buttonName: string) => {
    const selected = options.find(option => option.nome === buttonName);
    if (selected) {
      setSelectedOption(selected);
    }
  };

  const handleRightArrow = () => {
    setPage(prevPage => prevPage + 1);
    setSidePage('right');
  };

  const handleLeftArrow = () => {
    setPage(prevPage => prevPage - 1);
    setSidePage('left');
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, delayChildren: 0.5, },
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeOut', duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: sidePage === 'right' ? 100 : (sidePage === 'left' ? -100 : 0),
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 1.5 },
    },
  };

  const startIndex = page * optionsPerPage;
  const endIndex = startIndex + optionsPerPage;

  return (
    <motion.div
      className={`${headerVisible ? 'top-48' : 'top-20 pt-4'} fixed w-full flex justify-center align-middle bg-white items-center`}
      variants={containerVariants}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {page > 0 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleLeftArrow}
          className="p-1 rounded-full border border-gray-500 bg-white ml-12 z-10">
          <img src={leftArrow} alt="arrow" className="w-4 h-4" />
        </motion.button>
      )}
      <div
        className={`w-full ${page > 0 ? 'mr-14 ml-2' : ''}
      mx-14 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 2xl:grid-cols-16 gap-20`} >
        <AnimatePresence key={key} mode='wait'>
          {visibleOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial='hidden'
              animate='show'
              exit='exit'
              className={`flex flex-col align-middle text-center justify-center items-center hover:bg-gray-200 hover:shadow-lg hover:rounded-lg hover:text-black`}
            >
              <motion.button
                whileHover={{ boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.1)', scale: 1.01 }}
                whileTap={{ scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className={`${selectedOption === option ? 'underline underline-offset-[13px] decoration-2' : ''} 
              pb-3 flex flex-col align-middle text-center justify-center items-center`}
                onClick={() => handleButtonClick(option.nome)}>
                <img
                  src={option.img}
                  alt={option.nome}
                  key={index}
                  className="w-6 h-6 filter grayscale hover:fill-black "
                />
                <span className="text-xs font-medium mt-2 text-gray-600 whitespace-nowrap">{option.nome}</span>
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {endIndex < options.length && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleRightArrow}
          className="p-1 rounded-full border border-gray-500 bg-white mr-12">
          <img src={rightArrow} alt="arrow" className="w-4 h-4" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default SliderMenu;