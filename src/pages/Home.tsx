interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card = ({ title, description, imageSrc }: CardProps) => {
  return (
    <div className="max-w-xs overflow-hidden m-4">
      <img className="w-full rounded-3xl" src={imageSrc} alt="Card" />
      <div className="px-2 py-3">
        <div className="font-bold text-md mb-2">{title}</div>
        <p className="text-gray-700  text-sm">{description}</p>
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
    {
      title: 'Card 5',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 6',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 7',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 8',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      imageSrc: 'https://via.placeholder.com/300',
    }
  ];

  return (
    <div className="grid grid-cols-4 justify-center px-8">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageSrc={card.imageSrc} />
      ))}
    </div>
  );
};

export default Home;
