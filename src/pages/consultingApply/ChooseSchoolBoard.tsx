import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';




const ChooseSchoolBoard: FC = () => {
   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);
   

   return (
      <Styled.ChooseSchoolBoard>
         컨설팅 신청 및 보고 / 컨설팅 학교선택 / 목록
      </Styled.ChooseSchoolBoard>
   );
}


const Styled = {
   ChooseSchoolBoard: styled.div`
      
   `,
}


export default withLayout(ChooseSchoolBoard);