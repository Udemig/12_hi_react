// Icons
import { RiEdit2Fill } from "react-icons/ri";
import { LiaTrashAlt } from "react-icons/lia";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Card = ({ contact, handleDelete, handleEdit }) => {
  const [name, surname] = contact.name.split(" ");

  return (
    <div className="card">
      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => handleEdit(contact)}>
          <RiEdit2Fill />
        </button>
        <button onClick={() => handleDelete(contact.id)}>
          <LiaTrashAlt />
        </button>
      </div>

      {/* User Detail */}
      <h1>
        {name[0]} {surname[0]}{" "}
      </h1>
      <h3>{contact.name} </h3>
      <p>{contact.position}</p>
      <p>{contact.company}</p>

      {/* Bottom */}
      <div className="bottom">
        <div>
          <span>
            <FaPhone />
          </span>
          <span>{contact.phone}</span>
        </div>
        <div>
          <span>
            <IoMdMail />
          </span>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
