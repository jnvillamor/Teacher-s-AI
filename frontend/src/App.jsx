import CoursePage from "./components/Courses/CoursePage";
import Sidebar from "./components/Sidebar";
import QuizGeneratePage from "./components/QuizGeneration/QuizGeneratePage";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="md:grid md:grid-cols-5 h-screen bg-light-black">
      <Sidebar />
      <div className="col-span-4">
        <CoursePage />
        <QuizGeneratePage />
      </div>
    </div>
  );
}

export default App;
