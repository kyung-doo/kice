import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';
import BoardView from "../../components/BoardView";
import ContentsTitle from "../../components/ContentsTitle";

const ConsultingView: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [contents, setContents] = useState<any>(
      {
         idx : 14,
         tit:'학업성적관리규정 및 3학년 2학기 평가계획(영어)',
         info:{
            file: 'a', 
            view: 125,
            rgtDate: '2022-12-01'
         },
         con: '본문내용',
         comment: [
            {
               writer: '송선생',
               txt: '관리규정 세부항목에 대한 자료도 있으면 부탁드립니다.'
            },
            {
               writer: '이선생',
               txt: '댓글입니다.'
            },
         ],
         prePage: null,
         nextPage:{
            pageId : 15,
            tit: '다음글 타이틀'
         }
      }
   );

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.ConsultingView>
         <ContentsTitle depth1={'참고자료'} depth2={'컨설팅자료'} />
         <BoardView 
            isComment={true}
            contents={contents}
            info={[
               { label:'첨부파일', value: contents.info.file },
               { label:'조회수', value: contents.info.view },
               { label:'등록일', value: contents.info.rgtDate }
            ]}
         >
         </BoardView>
      </Styled.ConsultingView>
   );
}


const Styled = {
   ConsultingView: styled.div`
      
   `,
}


export default withLayout(ConsultingView);