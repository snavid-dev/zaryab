export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  setPaginationStart,
}) {
  const handlePageChange = (page) => {
    setPaginationStart(true);
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3, 4];
    } else if (currentPage >= totalPages - 1) {
      return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    }
  };

  return (
    <div className="col-span-6 xl:col-span-4 flex justify-center gap-10px">
      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-20 h-20 mr-1 pt-3 flex justify-center items-center border-2 border-black font-common-heavy text-3xl ${
            currentPage === page ? 'bg-black text-white' : ''
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
