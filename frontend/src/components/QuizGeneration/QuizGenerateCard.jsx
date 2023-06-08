import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { FormGroup, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const QuizGenerate = ({ question, answer }) => {
  const [active, setActive] = useState('Courses');

  const handleClick = (page) => {
    setActive(page);
  };
  console.log(question, answer);
  return (
    <div className='justify-center col-span-3 px-14 mt-4'>
      <Box
        sx={{
          width: '100%',
          height: '22.5rem',
          backgroundColor: 'primary.dark',
          borderRadius: '1rem',
          backgroundColor: 'white',
          padding: '2.625rem'
        }}>
        <Typography variant='h4' style={{ fontFamily: 'Poppins', marginBottom: '1.5rem' }}>
          Question
        </Typography>
        <TextField
          id='outlined-basic'
          label='Question'
          variant='outlined'
          sx={{ width: '100%', margin: '0.75rem', borderRadius: '.5rem' }}
          defaultValue={question}
        />
        <TextField
          id='outlined-basic'
          label='Answer'
          variant='outlined'
          sx={{ width: '100%', margin: '0.75rem', borderRadius: '.5rem' }}
          defaultValue={answer}
        />
        <div className='px-6'>
          <input className='mb-2' type="checkbox" id='noel' />
          <label htmlFor="noel">John Noel Villamor</label> <br />
          <input className='mb-2' type="checkbox" id='kaye' />
          <label htmlFor="kaye">Kaye Jose</label> <br />
          <input className='mb-2' type="checkbox" id='robert' />
          <label htmlFor="robert">Robert Quimno</label> <br />
        </div>
      </Box>
    </div>
  );
};

export default QuizGenerate;
