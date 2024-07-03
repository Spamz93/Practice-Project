import { useState } from "react";
import LoginPage from '../Forum_LoginPage/Forum_LoginPage'
import CreateThreadPage from '../Forum_CreateThreadPage/Forum_CreateThreadPage';

function Forum_App() {
  const [userId, setUserId] = useState(null);
  const [apiKey, setApiKey] = useState(null);

  const handleLogin = (id, key) => {
    setUserId(id);
    setApiKey(key);
  };

  return (
    <div>
      {userId ? (
        <CreateThreadPage userId={userId} apiKey={apiKey} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}
export default Forum_App