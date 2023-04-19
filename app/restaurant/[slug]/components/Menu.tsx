import { Items } from "@prisma/client";
import MenuCard from "./MenuCard";

export default function Menue({menu}: {menu: Items[]}){
  console.log("test", menu.length)
  return (
    <main className="bg-white mt-5">
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl text-black">Menu</h1>
      </div>
        {menu.length? (
            <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
        </div>
        ) : (
          <div className="flex flex-wrap justify-between text-black">
            <p>This restaurant does not have a menu yet</p>
          </div>
        )}
    </main>
  );
}