import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';




const QnaBoard: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.QnaBoard>
         컨설팅 공간 / Q&A / 목록
      </Styled.QnaBoard>
   );
}


const Styled = {
   QnaBoard: styled.div`
      
   `,
}


export default withLayout(QnaBoard);