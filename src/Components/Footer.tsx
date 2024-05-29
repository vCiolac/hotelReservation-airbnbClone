import React from 'react';
import worldIcon from '../assets/world.svg';
import face from '../assets/face.svg';
import github from '../assets/github.svg';
import insta from '../assets/insta.svg';
import downArrow from '../assets/down-arrow.svg';

const Footer: React.FC = () => {
  const locations = [
    { name: 'San Carlos de Bariloche', type: 'Aluguéis por temporada' },
    { name: 'Boituva', type: 'Aluguéis por temporada' },
    { name: 'Bragança Paulista', type: 'Aluguéis por temporada' },
    { name: 'Caldas Novas', type: 'Aluguéis por temporada' },
    { name: 'Campinas', type: 'Aluguéis por temporada' },
    { name: 'Corumbá', type: 'Aluguéis por temporada' },
    { name: 'Curitiba', type: 'Aluguéis por temporada' },
    { name: 'Gramado', type: 'Aluguéis de apartamentos' },
    { name: 'Gravatá', type: 'Aluguéis por temporada' },
    { name: 'Igaratá', type: 'Aluguéis de casas' },
    { name: 'Itapecerica da Serra', type: 'Aluguéis por temporada' },
    { name: 'Itapetininga', type: 'Aluguéis por temporada' },
    { name: 'Jarinu', type: 'Aluguéis por temporada' },
    { name: 'Kissimmee', type: 'Aluguéis de espaços que ac...' },
    { name: 'Londres', type: 'Aluguéis de condomínios' },
    { name: 'Manaus', type: 'Aluguéis por temporada' },
    { name: 'Mogi das Cruzes', type: 'Aluguéis por temporada' },
  ];

  return (
    <footer className="bg-gray-100 py-6 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Inspiração para viagens futuras</h3>
          <div className="flex space-x-6">
            <div>
              <button className="text-sm text-gray-900 font-semibold hover:text-gray-900">Popular</button>
              <hr className="border-b-2 border-black mt-2" />
            </div>
            <button className="text-sm text-gray-600 font-semibold hover:text-gray-900 mb-2">Litoral</button>
            <button className="text-sm text-gray-600 font-semibold hover:text-gray-900 mb-2">Atividades ao ar livre</button>
            <button className="text-sm text-gray-600 font-semibold hover:text-gray-900 mb-2">Histórica</button>
            <button className="text-sm text-gray-600 font-semibold hover:text-gray-900 mb-2">Ilhas</button>
            <button className="text-sm text-gray-600 font-semibold hover:text-gray-900 mb-2">Categorias</button>
            <button className="text-sm text-gray-600 font-semibold hover:text-gray-900 mb-2">Coisas para fazer</button>
          </div>
          <hr className="border-t border-gray-300 mb-4" />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="flex flex-col">
                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-900"><h4>{location.name}</h4></a>
                <span className="text-sm text-gray-500 overflow-hidden whitespace-pre">{location.type}</span>
              </div>
            ))}
            <button className="flex justify-center items-center text-sm font-semibold text-gray-900 hover:text-gray-900 ">
              Mostrar mais
              <img src={downArrow} alt="down-arrow" className="w-4 h-4 mx-4" />
            </button>

          </div>
          <hr className="border-t border-gray-300 mt-12" />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Atendimento</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Central de Ajuda</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">AirCover</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Antidiscriminação</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Apoio à pessoa com deficiência</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Opções de cancelamento</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Reporte um problema no bairro</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-900">Hospedagem</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Anuncie seu espaço no Airbnb</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">AirCover para anfitriões</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Recursos para anfitriões</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Fórum da comunidade</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Hospedagem responsável</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Participe de uma aula gratuita de hospedagem</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-900">Airbnb</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Newsroom</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Novos recursos</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Carreiras</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Investidores</a></li>
                <li><a href="#" className="text-sm text-gray-900 hover:text-gray-900">Locais emergenciais Airbnb.org</a></li>
              </ul>
            </div>
          </div>
          <hr className="mt-10 border-t border-gray-300" />
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm space-x-2">
              <span>© 2024 AirBnb Clone</span><span>·</span>
              <a href="#" className="text-sm hover:text-gray-900"> Privacidade</a> <span>·</span>
              <a href="#" className="text-sm hover:text-gray-900"> Termos</a> <span>·</span>
              <a href="#" className="text-sm hover:text-gray-900"> Mapa do site</a> <span>·</span>
              <a href="#" className="text-sm hover:text-gray-900"> Informações da empresa</a>
            </div>
            <div className="flex space-x-3">
              <div className='flex'>
                <img src={worldIcon} alt="world-icon" className="w-5 h-5" />
                <select className="bg-transparent border-none text-sm font-bold focus:outline-none">
                  <option value="pt-BR">Português (BR)</option>
                </select>
              </div>
              <span className="text-sm font-bold">R$ BRL</span>
              <a href="https://vciolac.vercel.app"><img src={face} alt="Portfolio" className="w-5 h-5" /></a>
              <a href="https://github.com/vciolac"><img src={github} alt="Github" className="w-5 h-5" /></a>
              <a href="https://vciolac.vercel.app"><img src={insta} alt="Portfolio" className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
