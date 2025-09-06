import UserProfile from "./components/UserProfile";
import { UserContext } from "./context/UserContext.jsx";

function App() {
  const userData = {
    name: "Ярослав",
    email: "student@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ border: "1px solid blue", padding: "16px" }}>
        <h1>Component App (Рівень 1)</h1>
        <p>Компонент роздає данні всім через Context.Provider.</p>

        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
