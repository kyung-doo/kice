import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';




const StudentBoard: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.StudentBoard>
         참고자료 / 학생평가자료 / 목록
      </Styled.StudentBoard>
   );
}


const Styled = {
   StudentBoard: styled.div`
      
   `,
}


export default withLayout(StudentBoard);