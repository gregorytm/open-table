import Link from "next/link";

export default function RestaurantNavBar(){
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/milestone-grill" className="mr-7 text-black">
        Overview
      </Link>
      <Link
        href="/restaurant/milestone-grill/menue"
        className="mr-7 text-black"
      >
        Menu
      </Link>
    </nav>
  );
}