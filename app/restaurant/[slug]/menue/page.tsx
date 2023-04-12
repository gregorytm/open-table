import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menue from "../components/Menue";

export const metadata = {
  title: "menue of milestone grill",
};

export default function RestrauntMenue(){
  return (
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar/>
            <Menue/>
          </div>
  );
}

