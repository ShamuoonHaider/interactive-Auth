import { ToggleThemeBtn } from "./ToggleThemeBtn";

export const Navbar = () => {
  return (
    <nav className="flex justify-between m-5 border-b-2 border-gray-300 pb-3">
      <h1 className="text-2xl font-bold">Brain Not Braining</h1>
      <ToggleThemeBtn />
    </nav>
  );
};
