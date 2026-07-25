import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <AppRoutes />;
}

export default App;
