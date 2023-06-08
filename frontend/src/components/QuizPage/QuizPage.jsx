export default function QuizPage() {
  return (
    <div className='p-12'>
      <h3 className=' text-2xl text-white'>Quizzes</h3>
      <table className='border-collapse table-auto align-middle w-full'>
        <thead>
          <tr className='border-b'>
            <th className='text-white text-lg p-3'>Quiz Name</th>
            <th className='text-white text-lg p-3'>Date</th>
            <th className='text-white text-lg p-3'>Quiz Code</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <th className='text-white text-sm px-3 py-4'>Quiz 01</th>
            <th className='text-white text-sm px-3 py-4'>May 22, 2023</th>
            <th className='text-white text-sm px-3 py-4'>CRS01QZ01</th>
          </tr>
          <tr className='border-b'>
            <th className='text-white text-sm px-3 py-4'>Quiz 02</th>
            <th className='text-white text-sm px-3 py-4'>May 22, 2023</th>
            <th className='text-white text-sm px-3 py-4'>CRS01QZ02</th>
          </tr>
          <tr className='border-b'>
            <th className='text-white text-sm px-3 py-4 '>Quiz 03</th>
            <th className='text-white text-sm px-3 py-4'>May 22, 2023</th>
            <th className='text-white text-sm px-3 py-4'>CRS01QZ03</th>
          </tr>
          <tr className='border-b'>
            <th className='text-white text-sm px-3 py-4'>Quiz 04</th>
            <th className='text-white text-sm px-3 py-4'>May 22, 2023</th>
            <th className='text-white text-sm px-3 py-4'>CRS01QZ04</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
