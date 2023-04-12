import MenueCard from "./MenuCard";

export default function Menue(){
  return (
    <main className="bg-white mt-5">
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl text-black">Menue</h1>
        <div className="flex flex-wrap justify-between">
         <MenueCard/>
        </div>
      </div>
    </main>
  );
}