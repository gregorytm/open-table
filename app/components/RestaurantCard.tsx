import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
interface Props {
  restraunt: RestaurantCardType;
}

export default function RestaurantCard({restraunt}: Props){
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border curse-pointer">
      <Link href={`/restaurant/${restraunt.slug}`}>
        <img
          src={restraunt.main_image}
          alt=""
          className="w-full h-36 "
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 text-black">{restraunt.name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2 text-black">*****</div>
            <p className="ml-2 text-black">77 reviews</p>
          </div>
          <div className="flex text-reg text-black font-light capitalize">
            <p className="mr-3">{restraunt.cuisine.name}</p>
            <Price price={restraunt.price}/>
            <p>{restraunt.location.name}</p>
          </div>
          <p className="text-sm text-black mt-1 font-bold">
            Booked 3 times today
          </p>
        </div>
      </Link>
    </div>
  );
}