import { useEffect, useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reducer from "./reducer";
import Header from "./components/Header";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  const changeMedia = (mq) => {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <BrowserRouter>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/country/:countryName"
              element={<CountryPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
