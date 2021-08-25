import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import SidebarContainer from "./components/assets/SidebarContainer/SidebarContainer";
import AppContainer from "./components/main/AppContainer";

import {store} from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SidebarContainer />
        <AppContainer />
      </BrowserRouter>
    </Provider>
  )
}


export default App;