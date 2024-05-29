import { useContext, useEffect } from "react";
import { Context, Hotel } from "../Context/Context";

interface CardProps {
  title: string;
  location: string;
  imageSrc: string;
}

const Card = ({ title, location, imageSrc }: CardProps) => {
  return (
    <div className="max-w-xs overflow-hidden m-4">
      <img className="w-full rounded-3xl min-h-64 object-fill" src={imageSrc} alt="Card" />
      <div className="px-2 py-3">
        <div className="font-bold text-sm">{title}</div>
        <p className="text-gray-600  text-sm">{location}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const { hotels, fetchHotels } = useContext(Context);

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="grid grid-cols-4 justify-center px-8">
      {hotels.map((hotel: Hotel) => (
        <Card key={hotel.hotelId} title={hotel.name} location={hotel.address} imageSrc={hotel.image} />
      ))}
    </div>
  );
};

export default Home;