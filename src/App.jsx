import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import TopicList from './Components/TopicList/TopicList'
import Post from './Components/Post/Post'

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/topics' element={<TopicList/>}></Route>
        <Route path='/post/:id' element={<Post/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
