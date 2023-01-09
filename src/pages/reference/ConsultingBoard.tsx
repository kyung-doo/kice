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
   {name: '학교급', w: '10%'},
   {name: '구분', w: '10%'},
   {name: '제목', w: '50%'},
   {name: '첨부파일', w: '10%'},
   {name: '등록일', w: '10%'},
   {name: '조회수', w: '10%'},
];
// dummy 보드 데이터
const boardData = {
   currentPage: 1,
   listLength: 345,
   listView: 15,
   lists: [{}]
};

// 학교급별 옵션
const schoolOptions = [
   {label: '초등', value: 'value1'},
   {label: '중등', value: 'value2'},
   {label: '고등 ', value: 'value3'},
];
// 자료구분 옵션
const dataTypeOptions = [
   {label: '성적관리', value: 'value1'},
   {label: '수업관리', value: 'value2'},
   {label: '참고자료', value: 'value3'},
   {label: '컨설팅안내', value: 'value4'},
   {label: '교재관리', value: 'value5'},
   {label: '평가관리', value: 'value6'},
];

const lists: {}[] = [];
Array.from(Array(boardData.listView), (k, i) => lists.push({
   listId: 0,
   regDate: '2022-12-01',
   title: '학업성적관리규정 및 3학년 2학기 평가계획(영어)',
   file: true,
   dataType: '성적관리',
   view: 14,
   schoolType: '초등'
}));
boardData.lists = lists;

const ConsultingBoard: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [sortType, setSortType] = useState<any>();
   const [sortSchool, setSortSchool] = useState<any>();
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
      <Styled.ConsultingBoard>
         <ContentsTitle depth1={'참고자료'} depth2={'컨설팅자료'} />
         <div className="board-top flex-between">
            <div className="sort-con flex-center">
               <Select
                  className="mr10"
                  placeholder="학교급별" 
                  w="150px"
                  value={sortSchool}
                  onChange={setSortSchool}
                  options={schoolOptions} 
               />
               <Select
                  placeholder="자료구분" 
                  w="150px"
                  value={sortType}
                  onChange={setSortType}
                  options={dataTypeOptions} 
               />
            </div>
            <BoardSearch 
               onSearch={onSearch} 
               options={searchOptions}
            />
         </div>
         <Board
            useCHeckbox={false}
            currentPage={currentPage}
            listView={boardData.listView}
            listLength={boardData.listLength}
            boardTItle={boarderTitle}
            baordEl={boardData && boardData.lists.map(( data: any, i ) => (
               <>
                  <div style={{width: boarderTitle[0].w}}>{data.schoolType}</div>
                  <div style={{width: boarderTitle[1].w}}>{data.dataType}</div>
                  <div style={{width: boarderTitle[2].w}}>{data.title}</div>
                  <div style={{width: boarderTitle[3].w}}>{data.file}</div>
                  <div style={{width: boarderTitle[4].w}}>{data.regDate}</div>
                  <div style={{width: boarderTitle[5].w}}>{data.view}</div>
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
      </Styled.ConsultingBoard>
   );
}


const Styled = {
   ConsultingBoard: styled.div`
      
   `,
}


export default withLayout(ConsultingBoard);