import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { reset } from "./styles/global";

import PostPage from "./pages/basic/PostPage";
import GetPage from "./pages/basic/GetPage";
import DeletePage from "./pages/basic/DeletePage";
import PutPage from "./pages/basic/PutPage";
import MainLayout from "./components/MainLayout/MainLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainLayout>
        <Sidebar />
        <MainContainer>
          <Routes>
            <Route path="/async/basic/post" element={<PostPage />} />
            <Route path="/async/basic/get" element={<GetPage />} />
            <Route path="/async/basic/put" element={<DeletePage />} />
            <Route path="/async/basic/delete" element={<PutPage />} />
          </Routes>
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
