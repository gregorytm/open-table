export default function SearchSideBar(){
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2 text-black">Regin</h1>
        <p className="font-light text-reg text-black">Toronto</p>
        <p className="font-light text-reg text-black">Ottowa</p>
        <p className="font-light text-reg text-black">Montreal</p>
        <p className="font-light text-reg text-black">Hamilton</p>
        <p className="font-light text-reg text-black">Kingston</p>
        <p className="font-light text-reg text-black">Niagara</p>
      </div>
      <div className="border-b pb-4">
        <h1 className="mb-2 text-black">Cuisine</h1>
        <p className="font-light text-reg text-black">Mexican</p>
        <p className="font-light text-reg text-black">Italian</p>
        <p className="font-light text-reg text-black">Chineese</p>
      </div>
      <div className="mt-3 ph-b">
        <h1>Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light text-black rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light text-black p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light text-black p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}