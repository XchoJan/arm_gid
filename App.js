import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LogOutNavigations from "./src/navigations/LogOutNavigations";
import MainNavigations from "./src/navigations/MainNavigations";
import { store } from "./src/store/index";
import { Provider } from "react-redux";
import {useSelector} from "react-redux";


const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  let isLogined = useSelector((store) => store.is_logged.is_logged);

  return (
    <NavigationContainer>
      {isLogined ? <MainNavigations /> : <LogOutNavigations />}
    </NavigationContainer>
  );
};

export default AppWrapper;
