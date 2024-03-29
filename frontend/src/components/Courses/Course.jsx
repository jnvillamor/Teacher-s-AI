/* eslint-disable react/prop-types */
import { CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import addSvg from '../../assets/add.svg';

export default function Course(props) {
  const { course } = props;
  const { id, section, color } = course;
  return (
    <Card className='rounded-lg h-[240px] max-w-[300px] place-items-center border'>
      {course === 'add' ? (
        <>
          <div className='h-full bg-white border-inherit flex justify-center items-center'>
            <img src={addSvg} alt='add' className='w-[50px] h-[50px]' />
          </div>
        </>
      ) : (
        <>
          <div className={`h-[160px] bg-[${color}] border-inherit`}></div>
          <CardContent className='bg-grey'>
            <h1>{id}</h1>
            <h2>{section}</h2>
          </CardContent>
        </>
      )}
    </Card>
  );
}
