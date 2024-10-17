import Social from "../social/Social";

const Footer = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-[#000000] pt-6 pb-6">
      <div className="container">
        <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
          &copy; {new Date().getFullYear()} Sean O'Daniels.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-3">
          <Social />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
