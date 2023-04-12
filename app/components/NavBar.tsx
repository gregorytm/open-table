import Link from "next/link"

export default function NavBar(){
  return (
        <nav className="bg-white p2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            Open Table
          </Link>
          <div>
            <div className="flex">
              <button className="bg-blue-400 border p-1 px-4 rounded mr-3">
                Sign in
              </button>
              <button className="text-black border p-1 px-4 rounded">
                Sign up
              </button>
            </div>
          </div>
        </nav>
  )
}