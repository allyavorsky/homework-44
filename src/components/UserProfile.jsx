import UserDetails from "./UserDetails";

const UserProfile = () => {
  return (
    <div
      style={{ border: "1px solid orange", padding: "16px", marginTop: "16px" }}
    >
      <h2>Component UserProfile (Рівень 2)</h2>
      <p>Компонент більше не передає props, які йому не потрібні.</p>

      <UserDetails />
    </div>
  );
};

export default UserProfile;
