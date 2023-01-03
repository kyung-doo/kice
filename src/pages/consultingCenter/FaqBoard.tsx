import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';




const FaqBoard: FC = () => {
   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);
   
   return (
      <Styled.FaqBoard>
         컨설팅 센터 / FAQ / 목록
      </Styled.FaqBoard>
   );
}


const Styled = {
   FaqBoard: styled.div`
      
   `,
}


export default withLayout(FaqBoard);