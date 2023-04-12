export default function Header(){
  return (
    <div>
      <h3 className="font-bold text-black">You're almost done</h3>
      <div className="mt-5 flex">
        <img
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
          alt=""
          className="w-32 h-18 rounded"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-black"> Fancy Restraunt</h1>
          <div className="flex mt-3 text-black">
            <p className="mr-6">Tues, 22, 2023</p>
            <p className="mr-6">7pm</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}