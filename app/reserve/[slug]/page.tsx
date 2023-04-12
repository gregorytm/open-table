import Header from "./components/Header";
import Form from "./components/Form";

export const metadata = {
  title: "reserve a table",
};

export default function Reserve(){
  return (
        <div className="border-t h-screen">
          <div className="py- w-3/5 m-auto">
            <Header/>
            <Form/>
          </div>
        </div>
  );
}
