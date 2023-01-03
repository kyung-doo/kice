import { FC, useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";



const AdminNote: FC = () => {

   return (
      <Styled.AdminNote>
         마이페이지 / 쪽지, 문자관리 {'(관리자 전용)'}
      </Styled.AdminNote>
   );
}


const Styled = {
   AdminNote: styled.div`
      
   `,
}


export default withLayout(AdminNote);