import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    navigate(`/products?q=${encodeURIComponent(input)}`);
  };
  return (
    <form
    onSubmit={handleSubmit}
    className="bg-gray-100 p-1 w-[38rem] rounded-xl shadow-md h-10 relative">
        <input 
        type="text" 
        className="outline-0 border-none w-[95%] h-full ml-7" 
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Search ..." />
           <CiSearch className="cursor-pointer text-2xl absolute top-0 left-0 mt-2 ml-1 text-pink-400"/>
    </form>
  )
}

export default SearchBox