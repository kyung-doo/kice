import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Button from "../../components/Button";
import ContentsTitle from "../../components/ContentsTitle";
import withLayout from "../../layout/withLayout";




const ApplyComp: FC = () => {

   return (
      <Styled.ApplyMain>
         <ContentsTitle l={'컨설팅 신청'} r={'컨설팅 신청 및 보고'} />
         <div className="pt60">
            <p>정상적으로 제출되었습니다.<br/>
            신청해주신 내용에 적합한<br/>
            컨설팅 2인이 매칭될 예정입니다.(약 1~2주 소요)<br/><br/>
            추후 컨설팅 매칭 완료 및 절차 안내드리겠습니다.<br/>
            감사합니다.
            </p>
            <div>문의하기 : 000-000-0000</div>
            <Button>메인화면으로 이동</Button>
         </div>
      </Styled.ApplyMain>
   );
}


const Styled = {
   ApplyMain: styled.div`
         text-align: center;
      
   `,
}


export default withLayout(ApplyComp);