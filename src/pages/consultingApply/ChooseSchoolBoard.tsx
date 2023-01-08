import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';
import ContentsTitle from "../../components/ContentsTitle";
import Board from "../../components/Board";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import BoardSearch from "../../components/BoardSearch";
import Select from "../../components/Select";


// 보드 타이틀
const boarderTitle = [
   {name: '신청일', w: '8%'},
   {name: '지역', w: '5%'},
   {name: '학교급', w: '5%'},
   {name: '학교명', w: '8%'},
   {name: '소재지', w: '8%'},
   {name: '일시', w: ''},
   {name: '방식', w: '5%'},
   {name: '영역', w: '12%'},
   {name: '신청서', w: '6%'},
   {name: '신청현황', w: '6%'},
   {name: '예비신청', w: '6%'},
   {name: '선택현황', w: '6%'},
];

// 검색 타입 옵션
const searchOptions = [
   {label: '제목', value: 'value1'},
   {label: '내용', value: 'value2'},
   {label: '제목 + 내용', value: 'value3'},
];

// 지역 옵션
const locationOptions = [
   {label: '서울', value: 'value1'},
   {label: '대전', value: 'value2'},
   {label: '대구 ', value: 'value3'},
];

// 학교급별 옵션
const schoolOptions = [
   {label: '초등', value: 'value1'},
   {label: '중등', value: 'value2'},
   {label: '고등 ', value: 'value3'},
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
   location: '부산',
   schoolType: '초등',
   school: '일동초등학교',
   addr: '사하구 일동',
   date: '2023-01-02(월) 15:00~16:00',
   type: '온라인',
   domain: '서술형평가도구개발',
   applyCount: '2/2',
   preApply: 5,
   selected: 1 
}));
boardData.lists = lists;





const ChooseSchoolBoard: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [currentPage, setCurrentPage] = useState<number>(boardData.currentPage);
   const [sortLocation, setSortLocation] = useState<any>();
   const [sortSchool, setSortSchool] = useState<any>();
   
   // boardSearch 검색 클릭시
   const onSearch = (type: string, keyword: string) : void => {
      console.log(type);
      console.log(keyword);
   }

   useEffect(() => {
      console.log('query: ', query);
   }, []);
   

   return (
      <Styled.ChooseSchoolBoard>
         <ContentsTitle depth2={'컨설팅 학교 선택'} depth1={'컨설팅 신청 및 보고'} />
         <div className="board-top">
            <div className="sort-con">
               <Select
                  placeholder="지역" 
                  w="150px"
                  value={sortLocation}
                  onChange={setSortLocation}
                  options={locationOptions} 
               />
               <Select
                  className="ml10"
                  placeholder="학교급별" 
                  w="150px"
                  value={sortSchool}
                  onChange={setSortSchool}
                  options={schoolOptions} 
               />
            </div>
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
                  <div style={{width: boarderTitle[0].w}}>{data.regDate}</div>
                  <div style={{width: boarderTitle[1].w}}>{data.location}</div>
                  <div style={{width: boarderTitle[2].w}}>{data.schoolType}</div>
                  <div style={{width: boarderTitle[3].w}}>{data.school}</div>
                  <div style={{width: boarderTitle[4].w}}>{data.addr}</div>
                  <div style={{flex: 1}}>{data.date}</div>
                  <div style={{width: boarderTitle[6].w}}>{data.type}</div>
                  <div style={{width: boarderTitle[7].w}}>{data.domain}</div>
                  <div style={{width: boarderTitle[8].w}}>
                     <Button as="a">보기</Button>
                  </div>
                  <div style={{width: boarderTitle[9].w}}>{data.applyCount}</div>
                  <div style={{width: boarderTitle[10].w}}>{data.preApply}</div>
                  <div style={{width: boarderTitle[11].w}}>
                     <span className={`${data.selected ? 'on' : 'off'}`}>{data.selected ? '선택하기' : '선택해제'}</span>
                  </div>
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
      </Styled.ChooseSchoolBoard>
   );
}


const Styled = {
   ChooseSchoolBoard: styled.div`
      .board-top {
         display: flex;
         justify-content: space-between;
         margin-bottom: 10px;
         .sort-con {
            display: flex;
            flex-direction: row;
         }
      }
   `,
}


export default withLayout(ChooseSchoolBoard);