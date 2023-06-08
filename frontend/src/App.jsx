import CoursePage from './components/Courses/CoursePage';
import QuizGenerateCard from './components/QuizGenerateCard';
import QuizPage from './components/QuizPage/QuizPage';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='md:grid md:grid-cols-5 h-screen bg-light-black'>
      <BrowserRouter>
        <Sidebar />
        <div className='col-span-4'>
          <Routes>
            <Route path='/' element={<CoursePage />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/quizgenerate' element={<QuizGenerateCard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
