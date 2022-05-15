import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from 'react';

import Admin from "./pages/Admin/Admin";
import WebSite from "./pages/website/Website";

function App() {
  return (<BrowserRouter>

    <div className="App">
    <Routes>
    <Route path="/" exact  element={<WebSite></WebSite>}  />

    <Route path="/admin" exact  element={<Admin> </Admin>}  />
   
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
