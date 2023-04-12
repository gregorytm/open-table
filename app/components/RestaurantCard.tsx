import Link from "next/link";

export default function RestaurantCard(){
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border curse-pointer">
      <Link href="/restaurant/milestones-grill">
        <img
          src="https://images.unsplash.com/photo-1612204078213-a227dba74093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
          alt=""
          className="w-full h-36 "
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 text-black">Mistone Grill</h3>
          <div className="flex items-start">
            <div className="flex mb-2 text-black">*****</div>
            <p className="ml-2 text-black">77 reviews</p>
          </div>
          <div className="flex text-reg text-black font-light capitalize">
            <p className="mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm text-black mt-1 font-bold">
            Booked 3 times today
          </p>
        </div>
      </Link>
    </div>
  );
}