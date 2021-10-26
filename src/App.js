import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (user) => {
    return setUsersList([...usersList, user]);
  };

  return (
    <div>
      <RegisterForm addNewUser={addNewUser} />
      <pre>{JSON.stringify(usersList)}</pre>
    </div>
  );
};

export default App;
