import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex justify-between">

      <h1 className="text-xl font-bold">
        Developer CV
      </h1>

      <div className="space-x-6">

        <Link to="/">Home</Link>

        <Link to="/skills">Skills</Link>

        <Link to="/projects">Projects</Link>
        <Link to="/github">GitHub</Link>

        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;