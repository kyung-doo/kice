import { FC, useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";



const MySchedule: FC = () => {

   return (
      <Styled.MySchedule>
         마이페이지 / 나의 컨설팅 일정
      </Styled.MySchedule>
   );
}


const Styled = {
   MySchedule: styled.div`
      
   `,
}


export default withLayout(MySchedule);