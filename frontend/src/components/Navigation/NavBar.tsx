import { Link } from "react-router-dom";
import Language from "./Language";

function NavBar() {
  return (
    <header className="px-12 lg:px-0 backdrop-blur-lg bg-dark-200/30 dark:bg-dark-900/30 fixed w-full z-20 top-0 left-0">
      <nav className="h-16 max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="hidden md:block text-xl font-bold border-b-2 border-transparent hover:border-purple-600 transition duration-300">
          <a href="/#home" className="">
            Benjamin <span className="text-color">Mehrez</span>
          </a>
        </h1>
        <h1 className="md:hidden text-xl font-bold border-b-2 border-transparent hover:border-purple-600 transition duration-300">
          <a href="/#home" className="">
            B<span className="text-color">M</span>
          </a>
        </h1>
        <div className="flex gap-10 font-semibold items-center">
          <Language />
          <a
            href="/#projects"
            className="border-b-2 border-transparent hover:border-purple-600 transition duration-300"
          >
            Projects
          </a>
          <a
            href="/#skills"
            className="border-b-2 border-transparent hover:border-purple-600 transition duration-300"
          >
            Skills
          </a>
          <Link
            to="https://www.linkedin.com/in/benjamin-mehrez-ab907b30b/"
            className="hidden md:block w-5 border-b-2 border-transparent pb-2 hover:border-purple-600 transition duration-300"
            target="_blank"
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </Link>
          <Link
            to="https://github.com/BenjaminMehrez"
            className="hidden md:block w-5 border-b-2 border-transparent pb-2 hover:border-purple-600 transition duration-300"
            target="_blank"
          >
            <img src="/github.svg" alt="github" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
