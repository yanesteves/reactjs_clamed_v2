import { useState, useEffect } from "react";
import Paginate from "react-paginate";
export default function Paginacao() {
    const originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      
        const currentItems = originalData.slice(indexOfFirstItem, indexOfLastItem);        
        setData(currentItems)
    }, [currentPage]);


    const handlePageChange = (data) => {
        setCurrentPage(data.selected + 1);
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item}>{item}</div>
            ))}
            <Paginate pageCount={Math.ceil(originalData.length / itemsPerPage)} // Calcula o número total de páginas
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active" />
        </div>
    )
}