import Course from "./Course";

const courses = [
  {
    id: 'Course 1',
    section: 'Section A',
    color: '#FD6531'
  },{
    id: 'Course 2',
    section: 'Section B',
    color: '#FEDEBE'
  },{
    id: 'Course 3',
    section: 'Section C',
    color: '#AF3A00'
  },{
    id: 'Course 4',
    section: 'Section D',
    color: '#FFAF42'
  },{
    id: 'Course 5',
    section: 'Section E',
    color: '#FF8303'
  },
]

export default function CourseList() {
  return (
    <div className='mt:[72px]'>
      <h1 className='text-heading text-white font-semibold mb-5'>Courses</h1>
      <div className="w-full h-[500px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:grid-cols-1 gap-5">
        {courses.map( course => {
          return(
            <Course key={course.id} course={course}/>
          )
        })}
        <Course course='add'/>
      </div>
    </div>
  );
}
