import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import withLayout from "../layout/withLayout";
import Button from "../components/Button";

import { mainDummy } from '../utils/method'

// 컨설팅자료 더미
const data1 : {}[] = [];
Array.from({length : 5},()=>{
   data1.push({ tit:'서울시교육청 수행평가 우수사례', date:'2023.03.18', new: true});
   data1.push({ tit:'부산 수행평가 우수사례', date:'2023.03.18', new: false});
})

// 공지사항 더미
const data2 : {}[] = [];
Array.from({length : 10},()=>{
   data2.push({ tit:'2023학년도 성적관리지침 개정 안내', date:'2023.03.18'});
})


const arr = [
   {name : 123,age:123},
   {name : 123,age:123},
]

const now = new Date();
// 메인페이지
const Main: FC = () => {

   const [scheduleData, setScheduleDate] = useState<any>(mainDummy);
   const [consultingData, setConsultingData] = useState<any>(data1);
   const [noticeData, setNoticeData] = useState<any>(data2);

   const [refTab,setRefTab] = useState<any>('컨설팅');
   const [qnaTab,setQnaTab] = useState<any>('FAQ');

  
   const [date, setDate] = useState<Date>(new Date());


   const changeMonth = useCallback((num : number) => {

      let changeMonth = new Date(date.setMonth(date.getMonth() + num));

      if(changeMonth < now){
         setDate(changeMonth);
         return;
      }
      changeMonth = now;
      setDate(changeMonth);
      window.alert('현재 월 이후로는 넘길 수 없습니다.');
      
   },[date]);

   return (
      <Styled.Main className="flex">
         <div className="left mr10">
            <div className="box mb10">
               <div className="head flex-between">
                  <h5>컨설팅일정</h5>
                  <a href='#' className="more">+전체일정</a>
               </div>
               <div className="body fs" style={{ height: '300px' }}>
                  <div className="calendar">
                     <div className="year">{date.getFullYear()}</div>
                     <strong>{date.getMonth() + 1}</strong>
                     <div>
                        <Button onClick={()=> changeMonth(-1)}>◀</Button>
                        <Button onClick={()=> changeMonth(1)}>▶</Button>
                     </div>
                  </div>
                  <div className="contents" style={{ width:'calc(100% - 130px)' }}>
                     <ul>
                        {
                           scheduleData && scheduleData.map((a:any,i:number)=>{
                              return(
                                 <li className="fs mb10" key={i}>
                                    <div className="mr10">{a.date}</div>
                                    <ul>
                                       {
                                          a.schools.map((b:any, i: number)=>{
                                             return(
                                                   <li className="mb5" key={i}>{b.name}({b.consultant})</li>
                                             )
                                          })
                                       }
                                    </ul>
                                 </li>
                              )          
                           })
                        }
                     </ul>                     
                  </div>
               </div>
            </div>
            <div className="box border">
               <div className="head flex-between">
                  <div>
                    <span onClick={()=>setRefTab('컨설팅')} className={ `tab line ${refTab ==  '컨설팅' ? 'active' : ''}`}>컨설팅 자료</span>
                    <span onClick={()=>setRefTab('학생평가')} className={ `tab ${refTab ==  '학생평가' ? 'active' : ''}`}>학생평가 자료</span>
                  </div>
                  <a href='#' className="more">+더보기</a>
               </div>
               <div className="body" style={{ height: '200px' }}>
                  <ul className="contents">
                     {
                        refTab == '컨설팅' && (
                           <>
                              {
                                 consultingData && consultingData.map((a:any,i: number)=>{
                                    return(
                                       <li className='flex-between mb7' key={i}>
                                          <a href="#">{a.new && <span style={{ color: 'red' }}>N</span>}{a.tit}</a>
                                          <div>{a.date}</div>
                                       </li>
                                 )
                              })
                              }
                        </>
                        )
                     }
                     {
                        refTab == '학생평가' && (
                          <div>학생평가 자료!!</div>
                        )
                     }
                  </ul>
               </div>
            </div>
         </div>
         <div className="right">
            <div className="box mb10">
               <div className="title mb20">
                  <strong>김선생</strong>
                  <span>서울 문정 고등학교</span>
               </div>
               <div className="mb20">D-5 23.8.10 문정고등학교컨설팅pm 2:00</div>
               <div className="flex-between mb20">
                  <div className='align-center' style={{ width:'33.3%' }}>받은쪽지<strong>2</strong></div>
                  <div className='align-center' style={{ width:'33.3%' }}>남은 컨설팅<strong>2</strong></div>
                  <div className='align-center' style={{ width:'33.3%' }}>받은쪽지<strong>3</strong></div>
               </div>
               <div className="flex-center">
                  <Button className='align-center' style={{ width:'33.3%' }}>내 정보</Button>
                  <Button className='align-center' style={{ width:'33.3%' }}>컨설팅 일정</Button>
                  <Button className='align-center' style={{ width:'33.3%' }}>컨설팅 이력</Button>
               </div>
               <Button className="quickMenu align-center mt20" style={{ background:'yellowgreen', width:'100%' }}>Quick Menu</Button>
            </div>
            <div className="box mb10">
               <div className="head flex-between">
                  <h5>공지사항</h5>
                  <a href='#' className="more">+더보기</a>
               </div>
               <div className="body">
                  <ul style={{ height:'100px',overflow:'auto' }}>
                  {
                     noticeData && noticeData.map((a:any,i: number)=>{
                        return(
                              <li className="flex-between mb5" key={i}>
                                 <a href='#'>{a.tit}</a>
                                 <div>{a.date}</div>
                              </li>
                           )
                        })
                     }
                  </ul>
               </div>
            </div>
            <div className="box border">
               <div className="head flex-between">
                  <div>
                    <span onClick={()=>setQnaTab('FAQ')} className={ `tab line ${qnaTab ==  'FAQ' ? 'active' : ''}`}>FAQ</span>
                    <span onClick={()=>setQnaTab('Q&A')} className={ `tab ${qnaTab ==  'Q&A' ? 'active' : ''}`}>Q&A</span>
                  </div>
                  <a href='#' className="more">+더보기</a>
               </div>
               <div className="body" style={{ height: '200px' }}>
                 
               </div>
            </div>

         </div>
      </Styled.Main>
   );
}


const Styled = {
   Main: styled.div`
   padding: 10px 0;
   .left,.right{
      width: 50%;
      
   }
   .box{
      padding: 10px;
      border: 1px solid #ccc;
      .head{
         padding: 10px;
         border-bottom: 1px solid #ccc;
      }
      .body{
         padding: 10px 0;
         .contents{
            height: 100%;
            overflow: auto;
         }
      }
      .calendar{
         width: 100px;
         height: 110px;
         background: yellow;
         margin-right: 30px;
         border: 1px solid #ccc;
         text-align: center;
         .year{
            font-size: 20px;
         }
         strong{
            font-size: 30px;
         }
         button{
            font-size: 30px;
         }
      }
   }
   .border{
      border: 1px solid #ccc;
   }
   .fs{
      display: flex;
      align-items: start;
   }
   .tab{
      cursor: pointer;
      color: gray;
      &.line{
         &::after{
            content:'';
            display: inline-block;
            width: 1px;
            height: 15px;
            background: #ccc;
            position: relative;
            margin: 0 10px;
            top: 1px;
         }
      }
      &.active{
         font-weight: bold;
         color: #000;
      }
   }

   `,
}


export default withLayout(Main);