import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';




const ConsultingBoard: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.ConsultingBoard>
         참고자료 / 컨설팅자료 / 목록
      </Styled.ConsultingBoard>
   );
}


const Styled = {
   ConsultingBoard: styled.div`
      
   `,
}


export default withLayout(ConsultingBoard);