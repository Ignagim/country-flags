import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CountryList from "./components/CountryList";
import reducer from "./reducer";
import ActionList from "./components/ActionList";
import Header from "./components/Header";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ActionList />
      <CountryList />
    </Provider>
  );
}

export default App;
