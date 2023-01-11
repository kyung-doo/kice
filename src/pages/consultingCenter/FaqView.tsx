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
      tit:'자주 뭍는 질문 게시판입니다. 조회수, 등록일 없이 운영됩니다.',
      con: '본문내용',
      prePage:{
         pageId : 13,
         tit: '이전글 타이틀'
      },
      
      nextPage:{
         pageId : 15,
         tit: '다음글 타이틀'
      }
   }];

const FaqView: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [contents, setContents] = useState<any>(lists[0]);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   return (
      <Styled.FaqView>
         <ContentsTitle depth1={'컨설팅 센터'} depth2={'FAQ'} />
         <BoardView 
            contents={contents}
         >
         </BoardView>
      </Styled.FaqView>
   );
}


const Styled = {
   FaqView: styled.div`
      
   `,
}


export default withLayout(FaqView);