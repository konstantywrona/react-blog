import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SinglePost from './components/pages/SinglePost/SinglePost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import AddPostForm from './components/features/AddPostForm/AddPostForm';
import EditPostForm from './components/features/EditPostForm/EditPostForm';
import Categories from './components/pages/Categories/Categories';
import CategoryFilter from './components/features/CategoryFilter/CategoryFilter';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPostForm />} />
        <Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/category/" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryFilter />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
