import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';




const ConsultingView: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.ConsultingView>
         참고자료 / 컨설팅자료 / 보기

      </Styled.ConsultingView>
   );
}


const Styled = {
   ConsultingView: styled.div`
      
   `,
}


export default withLayout(ConsultingView);