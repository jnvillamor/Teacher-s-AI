import SearchIcon from '@mui/icons-material/Search';
import { Input, styled } from '@mui/material';
import CourseList from './CourseList';

const CustomizeInput = styled(Input)`
  background: transparent;
  border: none;
  outline: none;
  color: grey;
  width: 20em;
`

export default function CoursePage( ) {
  return (
    <div className="col-span-3 px-14">
      <header className="h-[150px] flex items-center justify-end">
        <div className="rounded-2xl border px-2 py-1 border-grey" >
          <CustomizeInput disableUnderline type="text" placeholder='Search... ' className='bg-transparent focus:outline-0 text-sm'/>
          <span><SearchIcon sx={{ fill: 'grey' }}/></span>
        </div>
      </header>
      <CourseList />
    </div>
  )
}