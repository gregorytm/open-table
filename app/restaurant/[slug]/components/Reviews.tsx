export default function Reviews(){
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl">MK</h2>
          </div>
          <p className="text-black text-center">Michael Jordan</p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="text-black flex mr-5">*****</div>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              autem fugiat quisquam quis ipsa explicabo distinctio nemo
              exercitationem placeat rem eveniet quos architecto, iste maxime
              voluptates officiis inventore totam tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}