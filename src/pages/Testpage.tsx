import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Pagenation from "../components/Pagenation";



const Testpage: FC = () => {

   const onPage = useCallback((idx: number) => {
      console.log("페이지 변경: ", idx);
   }, []);

   return (
      <Styled.Testpage>

         <Pagenation 
            listLength={350} 
            listView={10} 
            pageView={10} 
            currentPage={1}  
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