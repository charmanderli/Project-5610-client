import "./index.css";
import { Route, Routes, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";

import { Landing, Error, ProtectedRoute } from "./pages";
import {
  AllPosts,
  AddPost,
  Profile,
  SharedLayout,
  MyPosts,
  EditPost,
  Joke,
  Search,
  EditProfile
} from "./pages/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/posts" element={<SharedLayout />}>
          <Route index element={<AllPosts />} />
          <Route path=":_id" element={<PostDetail/>} />
          <Route path=":_id/edit" element={<EditPost />} />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddPost />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path=""
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/joke" element={<Joke />} />
        </Route>

        <Route path="/" element={<Landing />} />
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
