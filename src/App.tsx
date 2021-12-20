import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "mobx-react";
import mainStore from "./stores/mainStore";
import {FavouritePage} from "./pages/Favourite";
import { LoginPage } from "./pages/Login";
import {Anchor} from "./components/ui/Anchor";
import {RegisterPage} from "./pages/Registration";


const MainPage = () => {
    return (
        <>
            <h1>this is the main page</h1>
            <Anchor href={'/login'} title={'Login'} />
            <Anchor href={'/favourite'} title={'favourite'} />
            <Anchor href={'/register'} title={'register'} />
        </>
    );
}

const App = () => {
  return (
      <BrowserRouter>
          <Provider {...mainStore}>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/favourite' element={<FavouritePage/>} />
            </Routes>
          </Provider>
      </BrowserRouter>

  );
}

export default App;
