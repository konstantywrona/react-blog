import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import SinglePost from './components/pages/singlePost/SinglePost';
import PostAdd from './components/pages/postAdd/PostAdd';
import PostEdit from './components/pages/postEdit/PostEdit';
import About from './components/pages/about/About';
import NotFound from './components/pages/notFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/post/add" element={<PostAdd />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
