import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SecondPage from "./pages/SecondPage";
import FrontendInternTask from "./pages/FrontendInternTask";
import { useEffect } from "react";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/secondpage":
        title = "";
        metaDescription = "";
        break;
      case "/frontend-intern-task":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      
      <Route path="/secondpage" element={<SecondPage />} />
      <Route path="/" element={<FrontendInternTask />} />
    </Routes>
  );
}
export default App;
