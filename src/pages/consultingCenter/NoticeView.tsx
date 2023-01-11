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
      prePage:{
         pageId : 13,
         tit: '이전글 타이틀'
      },
      
      nextPage:{
         pageId : 15,
         tit: '다음글 타이틀'
      }
   }];

const NoticeView: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [contents, setContents] = useState<any>(lists[0]);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.NoticeView>
         <ContentsTitle depth1={'컨설팅 센터'} depth2={'공지사항'} />
         <BoardView 
            contents={contents}
            info={[
               { label:'조회수', value: contents.info.view },
               { label:'등록일', value: contents.info.rgtDate }
            ]}
         >
         </BoardView>
      </Styled.NoticeView>
   );
}


const Styled = {
   NoticeView: styled.div`
      
   `,
}


export default withLayout(NoticeView);