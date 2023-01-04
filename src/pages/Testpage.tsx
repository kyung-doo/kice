import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Pagination from "../components/Pagination";



const Testpage: FC = () => {
   let [currentPage, setCurrentPage] = useState<number>(1);

   const onPage = useCallback((idx: number) => {
      console.log("페이지 변경: ", idx);
   }, []);
 
   return (
      <Styled.Testpage>

         <Pagination 
            listLength={340} 
            listView={10} 
            pageView={10} 
            currentPage={currentPage}  
            setCurrentPage={setCurrentPage}
            onPage={onPage}
         />

      </Styled.Testpage>
   );
}


const Styled = {
   Testpage: styled.div`
      
   `,
}


export default Testpage;