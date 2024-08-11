"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (f) => {
    f.preventDefault();
    if (search) {
      router.push(`/search?title=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full flex flex-row justify-between items-center px-2 md:px-4 py-2 transition-all duration-300 ${
        scrolled ? "bg-black" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent "></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-transparent to-transparent "></div>
      <Link
        className="font-bold text-gray-50 text-xl md:text-2xl z-[2]"
        href={"/"}
      >
        Watchix
      </Link>
      <div className=" w-[55%] md:w-fit relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search color="white" className="" size={18} />
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-1 ps-10 text-sm text-gray-50 placeholder-slate-200 border border-gray-100 rounded-sm  bg-transparent outline-none"
            placeholder="Search Movies, Documentaries..."
            required
          />
        </form>
      </div>
    </header>
  );
};

export default Navbar;
