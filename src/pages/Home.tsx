import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageSrc} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 2',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 3',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 4',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageSrc: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="grid grid-cols-4 justify-center">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageSrc={card.imageSrc} />
      ))}
    </div>
  );
};

export default Home;
