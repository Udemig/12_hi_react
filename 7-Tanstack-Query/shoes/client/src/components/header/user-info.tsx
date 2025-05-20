import { useEffect, useState, type FC } from "react";
import useUser from "../../service/user";
import { FaUser as User, FaSearch as Search } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../service/auth";

const UserInfo: FC = () => {
  const { logout } = useAuth();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // eğer tıklanana eleman user iconu değilse modalı kapat
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (!e.target.closest(".user-info")) {
          setIsOpen(false);
        }
      }
    };

    // ekrandaki tıklama olaylarını izle
    document.addEventListener("click", handleClick);

    // component unmount olduğunda event listener'ı kaldır
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <button className="cursor-pointer md:text-xl xl:text-2xl max-md:hidden">
        <Search />
      </button>

      <button className="relative cursor-pointer md:text-lg user-info">
        <User onClick={() => setIsOpen(!isOpen)} />
        {isOpen && user && (
          <div className="absolute top-10 -left-20 bg-white shadow-lg rounded-md z-[99]">
            <button className="header-button font-semibold">
              {user.firstName} {user.lastName}
            </button>
            {user.role === "admin" && (
              <Link to="/dashboard">
                <button className="header-button">Admin Paneli</button>
              </Link>
            )}
            <button
              disabled={logout.isPending}
              onClick={() => logout.mutate()}
              className="header-button"
            >
              Çıkış Yap
            </button>
          </div>
        )}
      </button>

      <button className="bg-my-yellow text-sm md:text-base xl:text-lg size-[20px] md:size-[24px] xl:size-[32px] rounded-full grid place-items-center">
        0
      </button>
    </div>
  );
};

export default UserInfo;
