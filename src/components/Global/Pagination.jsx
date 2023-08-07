const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
 return (
  <div className='flex justify-center mt-8'>
   <nav className='relative z-0 inline-flex shadow-sm'>
    <button
     onClick={() => handlePageChange(currentPage - 1)}
     disabled={currentPage === 1}
     className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
    >
     <span className='sr-only'>Previous</span>
     <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
      <path fillRule='evenodd' d='M9.293 3.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L6.707 8.707a1 1 0 11-1.414-1.414l4-4z' clipRule='evenodd' />
     </svg>
    </button>
    {Array.from({ length: totalPages }).map((_, index) => (
     <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-gray-500 hover:bg-gray-50'} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium`}
     >
      {index + 1}
     </button>
    ))}
    <button
     onClick={() => handlePageChange(currentPage + 1)}
     disabled={currentPage === totalPages}
     className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''} -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
    >
     <span className='sr-only'>Next</span>
     <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
      <path fillRule='evenodd' d='M10.293 16.293a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586V4a1 1 0 112 0v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4z' clipRule='evenodd' />
     </svg>
    </button>
   </nav>
  </div>
 );
};

export default Pagination;
