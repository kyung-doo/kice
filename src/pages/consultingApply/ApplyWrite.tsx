import { ChangeEvent, FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Button from "../../components/Button";
import ContentsTitle from "../../components/ContentsTitle";
import Radio from "../../components/Radio";
import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import Textbox from "../../components/Textbox";
import withLayout from "../../layout/withLayout";



// 컨설팅 신청 및 보고 > 컨설팅 신청
// 컨설팅 신청 작성

// select 
const selectOptions= [
   {label: 'option1', value: 'value1'},
   {label: 'option2', value: 'value2'},
   {label: 'option3', value: 'value3'},
   {label: 'option4', value: 'value4'},
]
const ApplyWrite: FC = () => {
   // 시도 선택
   const [sidoSelect, setSidoSelect] = useState<any>('');
   // 학교급 선택
   const [ageRadio, setAgeRadio] = useState<any>('value1');
   // 학교명
   const [scName,setScName] = useState<string>('');
   // 학교소재지
   const [scLoca,setScLoca] = useState<string>('');
   // 설립유형 
   const [scType, setScType] = useState<any>('value1');
   // 학교규모
   const [scSize, setScSize] = useState<string>('');
   // 컨설팅 신청 목적
   const [cstPp,setCstPp] = useState<string>('');
   // 컨설팅 희망일시
   const [cstDate,setCstDate] = useState<string>('');
   // 컨설팅 희망영역
   const [cstArea,setCstArea] = useState<string>('');
   // 컨설팅 희망방법
   const [cstMethod,setCstMethod] = useState<any>('value1');
   // 참석 예정 교사 수
   const [cstTeacher,setCstTeacher] = useState<string>('');
   // 컨설팅 희망 유형
   const [cstType,setCstType] = useState<string>('value1');

   // const validation = () : boolean => {
   //    if()
   //    return false
   // }


   
   return (
      <Styled.ApplyWrite>
         <ContentsTitle l={'컨설팅 신청'} r={'컨설팅 신청 및 보고'} />
         <div className="pt30 pb30">
            <h4 className="mb20">학교정보</h4>
            <table className="mb20">
               <colgroup>
                  <col />
                  <col />
               </colgroup>
               <tbody>
                  <tr>
                     <th>소속학교 시도</th>
                     <td>
                        <Select
                           options={selectOptions}
                           w="200px"
                           onChange={setSidoSelect}
                           placeholder='시도선택'
                        />
                     </td>
                  </tr>
                  <tr>
                     <th>학교급</th>
                     <td>
                        <RadioGroup value={ageRadio} onChange={setAgeRadio} arrow="hor">
                           <Radio 
                              name="radio1"
                              label="초"
                              value="value1"
                           />
                           <Radio 
                              name="radio1"
                              label="중"
                              value="value2"
                           />
                           <Radio 
                              name="radio1"
                              label="고"
                              value="value3"
                           />
                        </RadioGroup>
                     </td>
                  </tr>
                  <tr>
                     <th>학교명</th>
                     <td>
                        <Textbox 
                        w='200px' 
                        value={scName} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=>setScName(e.target.value)}
                        />
                     </td>
                  </tr>
                  <tr>
                     <th>학교소재지</th>
                     <td>
                        <Textbox 
                        w='200px' 
                        value={scLoca} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=>setScLoca(e.target.value)}
                        />
                     </td>
                  </tr>
                  <tr>
                     <th>설립유형</th>
                     <td>
                        <RadioGroup value={scType} onChange={setScType} arrow="hor">
                           <Radio 
                              name="radio2"
                              label="사립"
                              value="value1"
                           />
                           <Radio 
                              name="radio2"
                              label="국공립"
                              value="value2"
                           />
                        </RadioGroup>
                     </td>
                  </tr>
                  <tr>
                     <th>학교규모</th>
                     <td>
                        <Textbox 
                        w='500px' 
                        value={scSize} 
                        onChange={(e: ChangeEvent<HTMLInputElement>)=>setScSize(e.target.value)}
                        />
                     </td>
                  </tr>
               </tbody>
            </table>

            <div className="titleBtn mb20">
               <h4>컨설팅 신청 내용</h4><Button>작성안내</Button>
            </div>

            <TextArea 
            className="mb20"
            value={cstPp} 
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setCstPp(e.target.value) } 
            title={'컨설팅 신청 목적'}
            placeholder={'예1) 평가도구 개발\n예2) 평가 시행 및 채점'}
            />
            <TextArea 
            className="mb20"
            value={cstDate} 
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setCstDate(e.target.value) } 
            title={'컨설팅 희망일시'}
            placeholder={'예1) 12월 2일 (금) 13시~14시'}
            h={'30px'}   
            />
            <TextArea 
            value={cstArea} 
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setCstArea(e.target.value) } 
            className="mb20"
            title={'컨설팅 희망 영역'}
            />

            <RadioGroup 
            className="mb20"
            value={cstMethod} 
            onChange={setCstMethod} 
            arrow="hor"
            title={'컨설팅 희망 방법'}   
            >
               <Radio 
                  name="radio3"
                  label="온라인"
                  value="value1"
               />
               <Radio 
                  name="radio3"
                  label="오프라인"
                  value="value2"
               />
               <Radio 
                  name="radio3"
                  label="상관없음"
                  value="value3"
               />
            </RadioGroup>
            <TextArea 
            className="mb20"
            value={cstTeacher} 
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setCstTeacher(e.target.value)} 
            title={'참석 예정 교사 수(대략적인 참석 교사 수를 기재해 주십시오.)'}
            placeholder={'예1) 12월 2일 (금) 13시~14시'}
            h={'30px'}   
            />
             <RadioGroup 
            className="mb20"
            value={cstType} 
            onChange={setCstType} 
            arrow="hor"
            title={'컨설팅 희망 유형'}   
            >
               <Radio 
                  name="radio4"
                  label="소속 학교 인원만 진행"
                  value="value1"
               />
               <Radio 
                  name="radio4"
                  label="타학교와 합동 컨설팅"
                  value="value2"
               />
               <Radio 
                  name="radio4"
                  label="상관없음"
                  value="value3"
               />
            </RadioGroup>
            <div className='foot'>
               <Button className="mr5">임시저장</Button>
               <Button>제출하기</Button>
            </div>
         </div>
      </Styled.ApplyWrite>
   );
}


const Styled = {
   ApplyWrite: styled.div`
      .titleBtn{
         display: flex;
         align-items: center;
      }
      table{
         width: 100%;
         tr{
            border: 1px solid;
         }
         th{
            background: #eee;
         }
         td,th{
            border-right: 1px solid;
            padding: 10px;
         }
      }
      .foot{
         display: flex;
         align-items: center;
         justify-content: end;
      }
      
   `,
  
}


export default withLayout(ApplyWrite);