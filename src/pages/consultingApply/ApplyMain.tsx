import { FC } from "react";
import styled from 'styled-components';
import Button from "../../components/Button";
import ContentsTitle from "../../components/ContentsTitle";
import withLayout from "../../layout/withLayout";


// 컨설팅 신청 및 보고 > 컨설팅 신청
// 컨설팅 신청 인트로

const ApplyMain: FC = () => {

   return (
      <Styled.ApplyMain>
         <ContentsTitle depth2={'컨설팅 신청'} depth1={'컨설팅 신청 및 보고'} />
         <Styled.ContentsBody>
            <Button className="download">소개 리플렛 다운받기</Button>
            <h3>학생평가 컨설팅이란?</h3>
            <p>(목적) 교육평가 내실화를 위한 학교 맞춤형 컨설팅 제공<br/>
               (개요) 컨설팅 방식이나 컨설팅 과정을 설명<br/>
               (연도별추진결과) 그간의 컨설팅 추진결과 요약정리 제시
            </p>
            <Button className="mt60">2023 학년도 학생평가 컨설팅 신청서 작성하기</Button>
         </Styled.ContentsBody>
      </Styled.ApplyMain>
   );
}

const Styled = {
   ApplyMain: styled.div`
      `,
   ContentsBody: styled.div`
      text-align: center;
      display:flex;
      align-items: center;
      flex-direction: column;
   
      .download{
         align-self:  end;
      }
   `
}


export default withLayout(ApplyMain);