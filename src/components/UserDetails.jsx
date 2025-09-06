import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const user = useContext(UserContext);

  if (!user) {
    return <p>Дані користувача завантажуються...</p>;
  }

  return (
    <div
      style={{ border: "1px solid green", padding: "16px", marginTop: "16px" }}
    >
      <h3>Component UserDetails (Рівень 3)</h3>
      <p>Компонент отримав дані напряму з Context.</p>
      <p>Ім'я: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
