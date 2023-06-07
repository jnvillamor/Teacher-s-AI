import { useState } from 'react';

import CourseHeading from './components/CourseHeading';
import Course1 from './components/Course1';
import Course2 from './components/Course2';
import Course3 from './components/Course3';
import Course4 from './components/Course4';
import Course5 from './components/Course5';
import AddCourse from './components/AddCourse';

// import CourseHeading from './components/CourseHeading';
// import Back from './components/Back';
// import Sort from './components/Sort';
// import QuizHeading from './components/QuizHeading';
// import QuizTable from './components/QuizTable';
// import StudentTable from './components/StudentTable';
// import StudentHeading from './components/StudentHeading';
// import CoursePerformance from './components/CoursePerformance';

// import CourseHeading from './components/CourseHeading';
// import Back from './components/Back';
// import Reply from './components/Reply';
// import QuizHeading from './components/QuizHeading';





function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex h-screen'>


<CourseHeading />
      <Course1 />
      <Course2 />
      <Course3 />
      <Course4 />
       <Course5 />
      <AddCourse />   

      {/* <Sort />
      <Back />
      <CourseHeading />
      <QuizHeading />
      <QuizTable />
      <CoursePerformance />
      <StudentHeading />
      <StudentTable /> */}

      {/* <Back />
      <CourseHeading />
      <QuizHeading />
      <Reply /> */}

      

    </div>
  );
}

export default App;
