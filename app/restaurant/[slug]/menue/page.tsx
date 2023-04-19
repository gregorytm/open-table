import RestaurantNavBar from "../components/RestaurantNavBar";
import Menue from "../components/Menu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true
    }
  })

  if(!restaurant){
    throw new Error
  }
  return restaurant.items
}

export const metadata = {
  title: "menue of milestone grill",
};

export default async function RestrauntMenue({params}: {params:{slug: string}}){
  const menu = await fetchRestaurantMenu(params.slug);
  // console.log("menue",{menu})
  return (
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar slug={params.slug}/>
            <Menue menu={menu}/>
          </div>
  );
}

