import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header className="text-3xl uppercase font-bold text-center bg-gray-800 text-white p-4">
        <span className="flex items-center justify-center"> 
        <FaDatabase  size={30} color="yellow" className="mr-2"/>
        <Link to="/">Raspa INPI</Link>
        </span>
      </header>
    </div>
  );
}
