import React from 'react';
import GlobalStyle from "./styles/blobalStyles";
import Layout from "./pages/Layout"
import LeftBar from "./components/LeftBar";
import CenterContent from "./components/CenterContent";
function App() {
  return (
   <>
   <GlobalStyle/>
   <Layout>
     <LeftBar/>
     <CenterContent/>
   </Layout>
   </>
  );
}

export default App;
