export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex gap-2 justify-center items-center bg-indigo-200 mb-10 text-zinc-600 font-bold px-4 py-2 border-2 border-black  rounded-none transition-all duration-200 hover:shadow-[-4px_4px_0px_0px_rgba(240,65,12,1),-8px_8px_0px_0px_rgba(0,128,0,1)] hover:translate-x-2 hover:-translate-y-2 cursor-pointer">
      {children}
    </button>
  );
};
