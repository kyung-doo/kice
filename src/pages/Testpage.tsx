import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Select from "../components/Select";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";
import Textarea from "../components/TextArea";
import Scheduler from "../components/Scheduler";


// select
const selectOptions= [
   {label: 'option1', value: 'value1'},
   {label: 'option2', value: 'value2'},
   {label: 'option3', value: 'value3'},
   {label: 'option4', value: 'value4'},
]


const Testpage: FC = () => {
   // 페이지네이션 
   const [currentPage, setCurrentPage] = useState<number>(1);
   // 모달
   const [modal, setModal] = useState<boolean>(false);

   // 셀렉트박스
   const [selectVal, setSelectVal] = useState<any>(selectOptions[0]);

   // 라디오
   const [radioVal1, setLadioVal1] = useState<string>('value1');
   const [radioVal2, setLadioVal2] = useState<string>('value2');
   
   // 텍스트박스
   const [textVal, setTextval] = useState<any>('');


   // 스케쥴 데이터
   const [schduleData, setScheduleData] = useState<any[]>([
      { 
         date: '2023/01/10', 
         lists: [
            {
               scheduleId: '0',
               date: '일시 1월 10일 (화) 15:00 ~ 16:00',
               title: '[온라인] 충남 태안여자고등학교 (이정운, 박진)',
               consultant: '전미정, 전종식',
               teacher: '김지숙 선생님'
            },
            {
               scheduleId: '1',
               date: '일시 1월 10일 (화) 15:00 ~ 16:00',
               title: '[온라인] 제주 광령초등학교 (이윤섭, 손준호)',
               consultant: '전미정, 전종식',
               teacher: '김지숙 선생님'
            }
         ]
      },
      { 
         date: '2023/01/24', 
         lists: [
            {
               scheduleId: '3',
               date: '일시 1월 24일 (화) 15:00 ~ 16:00',
               title: '[온라인] 대구 이곡중학교 (전미정, 정종식)',
               consultant: '전미정, 전종식',
               teacher: '김지숙 선생님'
            }
         ]
      }
   ]);

   const onChangeDate = useCallback(( year: number, month: number )=> {
      console.log('달력 변경 year: ', year, 'month: ', month);
      // ajax 처리후 setScheduleData 변경
   },[]);

   const onCickSchedule = useCallback(( scheduleId: string ) => {
      console.log('스케쥴 클릭: ', scheduleId);
   },[]);


   return (
      <Styled.Testpage>
         <Pagination 
            listLength={340} 
            listView={10} 
            pageView={10} 
            currentPage={currentPage}  
            setCurrentPage={setCurrentPage}
         />
         <Button onClick={()=>setModal(true)}>모달버튼</Button>
         {modal &&  
            <Modal 
               head={<h2 className="modal-title">모달타이틀</h2>}
               foot={
                  <>
                     <Button onClick={()=>setModal(false)}>취소</Button>
                     <Button>발송</Button>
                  </>
               }
               setModal={setModal}>
               <p>모달내용</p>
            </Modal>
         }

         <Select
            className="mt20"
            options={selectOptions}
            w="200px"
            defaultValue={selectVal} 
            onChange={setSelectVal}
         />
         
         <Select
            className="mt20"
            options={selectOptions}
            placeholder="select..."
         />

         <RadioGroup className="mt20" value={radioVal1} onChange={setLadioVal1}>
            <Radio 
               name="radio1"
               label="라디오1"
               value="value1"
            />
            <Radio 
               name="radio1"
               label="라디오2"
               value="value2"
            />
            <Radio 
               name="radio1"
               label="라디오3"
               value="value3"
            />
            <Radio 
               name="radio1"
               label="라디오4"
               value="value4"
            />
         </RadioGroup>

         <RadioGroup className="mt20" value={radioVal2} onChange={setLadioVal2} arrow="hor">
            <Radio 
               name="radio2"
               label="라디오1"
               value="value1"
            />
            <Radio 
               name="radio2"
               label="라디오2"
               value="value2"
            />
            <Radio 
               name="radio2"
               label="라디오3"
               value="value3"
            />
            <Radio 
               name="radio2"
               label="라디오4"
               value="value4"
            />
         </RadioGroup>

         <Textarea placeholder={'내용을 입력해주세요.'} value={textVal} onChange={setTextval}/>

         {schduleData && 
            <Scheduler 
               scheduleData={schduleData} 
               onChangeDate={onChangeDate} 
               onCickSchedule={onCickSchedule}
            />
         }

      </Styled.Testpage>
   );
}


const Styled = {
   Testpage: styled.div`
      
   `,
}


export default Testpage;