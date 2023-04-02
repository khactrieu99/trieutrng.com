import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function useAuth() {
  const [cookies, setCookies] = useCookies();
  const [authenticated, setAuthenticated] = useState(false);

  const getCookie = (name) => {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? match[1] : null;
  }
  const sessionExists = () => {
    return getCookie("session") !== null;
  }

  useEffect(() => {
    if (!sessionExists()) {
      return;
    }
    setAuthenticated(true);
  }, [])

  return {
    sessionExists,
    authenticated
  };
}

export default useAuth;