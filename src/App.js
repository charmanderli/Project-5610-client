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
  EditProfile,
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
          <Route path=":_id/edit" element={<EditPost />} />
          <Route path="new" element={<AddPost />} />
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
