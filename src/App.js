import "./index.css";
import styled from "styled-components";

import PostList from "./components/PostList";
import LoginButton from "./components/LoginButton";
import { Route, Routes, Link } from "react-router-dom";

import PostDetail from "./components/PostDetail";
import New from "./components/New";

import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AllPosts,
  AddPost,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllPosts />} />
          <Route path=":_id" element={<PostDetail />} />
          <Route path=":_id/edit" element={<div>edit the post</div>} />
          <Route path="new" element={<AddPost />} />
        </Route>
        <Route path="/stats" element={<div>placeholder</div>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

// {/* <div className="App">
//       <nav className="Nav">
//         <div className="Nav-left">
//           <div className="logo"></div>
//           <h1>Poco Loco</h1>
//         </div>

//         <div className="Nav-right">
//           <p className="city">Halle</p>
//           <div className="add">
//             <Link to="/posts/new"></Link>
//           </div>
//           <LoginButton />
//         </div>
//       </nav>
//       <main className="main">
//         <Routes>
//           <Route path="/" element={<Landing />}></Route>
//           <Route path="*" element={<p>Nothing there</p>}></Route>
//           <Route path="/posts/new" element={<New />}></Route>
//           <Route path="/posts/:_id" element={<PostDetail />}></Route>
//         </Routes>
//       </main>
//     </div> */}
