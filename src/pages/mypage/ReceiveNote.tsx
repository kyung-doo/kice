import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';
import ContentsTitle from "../../components/ContentsTitle";
import BoardSearch from "../../components/BoardSearch";
import Select from "../../components/Select";
import Board from "../../components/Board";
import Pagination from "../../components/Pagination";

// 검색 타입 옵션
const searchOptions = [
   {label: '제목', value: 'value1'},
   {label: '내용', value: 'value2'},
   {label: '제목 + 내용', value: 'value3'},
];

// 보드 타이틀
const boarderTitle = [
   {name: '제목', w: '80%'},
   {name: '등록일', w: '10%'},
   {name: '조회수', w: '10%'}
];
// dummy 보드 데이터
const boardData = {
   currentPage: 1,
   listLength: 345,
   listView: 15,
   lists: [{}]
};

const lists: {}[] = [];
Array.from(Array(boardData.listView), (k, i) => lists.push({
   listId: 0,
   regDate: '2022-12-01',
   title: '학업성적관리규정 및 3학년 2학기 평가계획(영어)',
   view: 14
}));
boardData.lists = lists;

const ReceiveNote: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [currentPage, setCurrentPage] = useState<number>(boardData.currentPage);

   useEffect(() => {
      console.log('query: ', query);
   },[]);

   // boardSearch 검색 클릭시
   const onSearch = (type: string, keyword: string) : void => {
      console.log(type);
      console.log(keyword);
   }

   return (
      <Styled.ReceiveNote>
         <ContentsTitle depth1={'마이페이지'} depth2={'받은 쪽지'} />
         <div className="board-top flex-end">
            <BoardSearch 
               onSearch={onSearch} 
               options={searchOptions}
            />
         </div>
         <Board
            useCHeckbox={true}
            currentPage={currentPage}
            listView={boardData.listView}
            listLength={boardData.listLength}
            boardTItle={boarderTitle}
            baordEl={boardData && boardData.lists.map(( data: any, i ) => (
               <>
                  <div style={{width: boarderTitle[0].w}}>{data.title}</div>
                  <div style={{width: boarderTitle[1].w}}>{data.regDate}</div>
                  <div style={{width: boarderTitle[2].w}}>{data.view}</div>
               </>
            ))}
         />
         <div className="flex-center mt30 mb30">
            <Pagination 
               listLength={boardData.listLength} 
               listView={boardData.listView} 
               pageView={10} 
               currentPage={currentPage}  
               setCurrentPage={setCurrentPage}
            />
         </div>
      </Styled.ReceiveNote>
   );
}

const Styled = {
   ReceiveNote: styled.div`
      
   `,
}

export default withLayout(ReceiveNote);
