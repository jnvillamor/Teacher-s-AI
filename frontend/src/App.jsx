import CoursePage from './components/Courses/CoursePage';
import Sidebar from "./components/Sidebar";
import QuizGenerateCard from "./components/QuizGenerateCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="md:grid md:grid-cols-5 h-screen bg-dark-gray">
      <Sidebar />
      <div className="col-span-4">
        <QuizGenerateCard />
        <CoursePage />
      </div>
    </div>
  );
}

export default App;
