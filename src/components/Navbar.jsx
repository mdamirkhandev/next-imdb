import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex font-bold dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4">
      <NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  );
}
