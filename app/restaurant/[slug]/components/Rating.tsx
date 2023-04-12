export default function Rating(){
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center text-black">
        <p>*****</p>
        <p className="text-reg ml-3">4.8</p>
      </div>
      <div className="text-black">
        <p className="text-reg ml-4">600 reviews</p>
      </div>
    </div>
  );
}