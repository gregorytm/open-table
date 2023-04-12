export default function Form(){
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 bg-white"
        placeholder="first name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 bg-white"
        placeholder="last name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 bg-white"
        placeholder="phone number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 bg-white"
        placeholder="email"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 bg-white"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 bg-white"
        placeholder="requests (optional)"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-grey-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm text-black">
        By clicking accept you agree to are tearms of service. You may opt out
        of receivng text any time
      </p>
    </div>
  );
}