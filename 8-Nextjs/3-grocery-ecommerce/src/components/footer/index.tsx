import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-green-900 text-center p-6 text-white text-sm">
      Manav Market | &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
    </footer>
  );
};

export default Footer;
