import Link from "next/link";

export default function RestaurantCard(){
  return (
    <div className="border-b flex pb-5">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
          alt=""
          className="w-44 rounded"
        />
        <div className="pl-5">
          <h2 className="text-3xl text-black">Fancy Restraunt</h2>
          <div className="flex items-start">
            <div className="flex mb-2 text-black">*****</div>
            <p className="ml-2 text-sm text-black">Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4 text-black">$$$</p>
              <p className="mr-4 text-black">Mexican</p>
              <p className="mr-4 text-black">Ottowa</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href="/restaurant/milestone-grill">View More information</Link>
          </div>
        </div>
    </div>
  );
}