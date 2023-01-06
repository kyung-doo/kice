import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Select from "../components/Select";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";
import Textarea from "../components/TextArea";
import BoardSearch from "../components/BoardSearch";

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
   
   // textarea
   const [textVal, setTextval] = useState<any>('');

   // boardSearch 검색 클릭시
   const onSearch = (type: string, keyword: string) : void => {
      console.log(type);
      console.log(keyword);
   }

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

         <Textarea placeholder={'내용을 입력해주세요.'} value={textVal} onChange={setTextval} h={'100px'}/>

         <BoardSearch 
         onSearch={onSearch} 
         options={selectOptions}
         />
      </Styled.Testpage>

   );
}


const Styled = {
   Testpage: styled.div`
   padding: 20px;
   `,
}


export default Testpage;