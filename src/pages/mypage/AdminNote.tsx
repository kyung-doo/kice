import { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';
import ContentsTitle from "../../components/ContentsTitle";
import Board from "../../components/Board";
import Pagination from "../../components/Pagination";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Textbox from "../../components/Textbox";
import TextArea from "../../components/TextArea";

// 검색 타입 옵션
const searchOptions = [
   {label: '제목', value: 'value1'},
   {label: '내용', value: 'value2'},
   {label: '제목 + 내용', value: 'value3'},
];

// 보드 타이틀
const boarderTitle = [
   {name: '발송시각', w: '10%'},
   {name: '받는 사람', w: '10%'},
   {name: '내용', w: '60%'},
   {name: '상태', w: '10%'},
   {name: '발송취소', w: '10%'},
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
   time: '2022-12-01 16:00',
   to: '김선생',
   title: '학업성적관리규정 및 3학년 2학기 평가계획(영어)',
   status: '확인전',
}));

boardData.lists = lists;

const AdminNote: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [currentPage, setCurrentPage] = useState<number>(boardData.currentPage);
   const [modal,setModal] = useState<boolean>(false);
   const [tit, setTit] = useState<string>('');
   const [contents,setContents] = useState<string>('');

   useEffect(() => {
      console.log('query: ', query);
   },[]);


   return (
      <Styled.AdminNote>
       
         <ContentsTitle depth1={'마이페이지'} depth2={'쪽지, 문자관리'} />
         <div className="board-top flex-end mb10">
           <Button className="mr5" onClick={()=>setModal(true)}>쪽지보내기</Button>
           <Button>문자관리</Button>
         </div>
         <span>발송목록</span>
         <Board
            useCHeckbox={true}
            currentPage={currentPage}
            listView={boardData.listView}
            listLength={boardData.listLength}
            boardTItle={boarderTitle}
            baordEl={boardData && boardData.lists.map(( data: any, i ) => (
               <>
                  <div style={{width: boarderTitle[0].w}}>{data.time}</div>
                  <div style={{width: boarderTitle[1].w}}>{data.to}</div>
                  <div style={{width: boarderTitle[2].w}}>{data.title}</div>
                  <div style={{width: boarderTitle[3].w}}>{data.status}</div>
                  <div style={{width: boarderTitle[4].w}}>
                     {
                        data.status === '확인전' ? <Button>취소</Button> : '-'
                     }
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
            {
               modal && 
               <Modal 
               setModal={setModal}
               head={<h2 className="modal-title">쪽지보내기</h2>}
               foot={
               <>
                  <Button className="mr5">발송</Button>
                  <Button onClick={()=>{
                     setContents('');
                     setTit('');
                  }}>다시쓰기</Button>
               </>
            }
            >
               <div className='send-head mb10'>
                  <div className="label">받는 사람</div>
                  <div className="inputArea">
                     <Textbox value={tit} onChange={(e)=>setTit(e.target.value)}/>
                     <Button>검색</Button>
                  </div>
               </div>
               <div className="send-body">
                  <TextArea value={contents} onChange={(e)=>setContents(e.target.value)}/>
               </div>
            
               </Modal>
            }
      </Styled.AdminNote>
   );
}

const Styled = {
   AdminNote: styled.div`
      .board-count{
         display: none;
      }
      .send{
         &-head{
            height: 60px;
            border: 1px solid #ddd;
            display:flex;
            .label{
               height: 100%;
               width: 20%;
               background: #ccc;
               border-right: 1px solid #ddd;
            }
            .inputArea{
               height: 100%;
               width: 80%;
               padding-left: 5px;
               display: flex;
               justify-content: flex-start;
               align-items: center;

            }
         }
         &-body{
            textarea{
               height: 300px;
            }
         }
      }

   `,
}


export default withLayout(AdminNote);