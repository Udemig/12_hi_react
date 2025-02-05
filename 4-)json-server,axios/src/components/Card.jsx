// Icons
import { RiEdit2Fill } from "react-icons/ri";
import { LiaTrashAlt } from "react-icons/lia";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Card = () => {
  return (
    <div className="card">
      {/* Buttons */}
      <div className="buttons">
        <button>
          <RiEdit2Fill />
        </button>
        <button>
          <LiaTrashAlt />
        </button>
      </div>

      {/* User Detail */}
      <h1>K A</h1>
      <h3>İsim</h3>
      <p>Pozisyon Bilgisi</p>
      <p>Şirket Adı</p>

      {/* Bottom */}
      <div className="bottom">
        <div>
          <span>
            <FaPhone />
          </span>
          <span>Telefon no</span>
        </div>
        <div>
          <span>
            <IoMdMail />
          </span>
          <span>Mail</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
