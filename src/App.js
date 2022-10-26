import Header from "./components/header/header.tsx";
import styled from "styled-components";
import '../src/assets/css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/main-page/main-page.tsx";
import About from "./components/about/about.tsx";
import Contact from "./components/contact/contact.tsx";
import Works from "./components/works/works.tsx";


const AppStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  align-self: flex-start;

  @media (max-width: 650px) {

    min-height: auto;
  }
`


const App = function () {



    return (


        <AppStyledDiv>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/contacts'} element={<Contact/>}/>
                    <Route path={'/works'} element={<Works/>}/>
                    <Route> path={'/cv'} element={}</Route>
                </Routes>
            </BrowserRouter>
        </AppStyledDiv>


    )
}

export default App;
