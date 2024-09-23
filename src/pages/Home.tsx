import { useContext, useEffect } from "react";
import { Context, Hotel } from "../Context/Context";

interface CardProps {
  title: string;
  location: string;
  imageSrc: string;
}

const Card = ({ title, location, imageSrc }: CardProps) => {
  return (
    <div className="max-w-xs w-full overflow-hidden m-4">
      <div >
        <img
          className="w-full rounded-2xl min-h-64 object-cover"
          src={imageSrc}
          alt="Card"
        />
        <div className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block fill-current text-black opacity-50 h-6 w-6 stroke-current stroke-2 overflow-visible"
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </div>
      </div>
      <div className="px-2 py-3">
        <div className="font-bold text-sm">{title}</div>
        <p className="text-gray-600 text-sm">{location}</p>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {hotels.map((hotel: Hotel) => (
        <Card
          key={hotel.hotelId}
          title={hotel.name}
          location={hotel.address}
          imageSrc={hotel.image}
        />
      ))}
    </div>
  );
};

export default Home;