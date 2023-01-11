import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';
import BoardView from "../../components/BoardView";
import ContentsTitle from "../../components/ContentsTitle";

const lists = [
   {
      idx : 14,
      tit:'공지사항 등록 게시물 타이틀',
      info:{
         status:'답변완료',
         answerDate :'2022-02-02',
         registrant: '연쥬', 
         view: 125,
         rgtDate: '2022-12-01'
      },
      con: '본문내용',
      prePage:{
         pageId : 13,
         tit: '이전글 타이틀'
      },
      answer : '답변내용입니다.',
      nextPage:{
         pageId : 15,
         tit: '다음글 타이틀'
      }
   }];

const QnaView: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [contents, setContents] = useState<any>(lists[0]);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.QnaView>
         <ContentsTitle depth1={'컨설팅 센터'} depth2={'Q&A'} />
         <BoardView 
            isAnswer={true}
            contents={contents}
            info={[
               { label:'상태', value: contents.info.status },
               { label:'답변일', value: contents.info.answerDate },
               { label:'등록자', value: contents.info.registrant },
               { label:'조회수', value: contents.info.view },
               { label:'등록일', value: contents.info.rgtDate }
            ]}
         >
         </BoardView>
      </Styled.QnaView>
   );
}


const Styled = {
   QnaView: styled.div`
      
   `,
}


export default withLayout(QnaView);