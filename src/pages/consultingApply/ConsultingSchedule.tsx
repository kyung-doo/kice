import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";




const ConsultingSchedule: FC = () => {

   return (
      <Styled.ConsultingSchedule>
         컨설팅 신청 및 보고 / 컨설팅 일정
      </Styled.ConsultingSchedule>
   );
}


const Styled = {
   ConsultingSchedule: styled.div`
      
   `,
}


export default withLayout(ConsultingSchedule);