import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import ContentsTitle from "../../components/ContentsTitle";
import Scheduler from "../../components/Scheduler";
import withLayout from "../../layout/withLayout";




const MySchedule: FC = () => {
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

   const onClickSchedule = useCallback(( scheduleId: string ) => {
      console.log('스케쥴 클릭: ', scheduleId);
   },[]);

   return (
      <Styled.MySchedule>
         <ContentsTitle depth1={'마이페이지'} depth2={'나의 컨설팅 일정'}  />
         <div className="pb30">
            {schduleData && 
               <Scheduler 
                  scheduleData={schduleData} 
                  onChangeDate={onChangeDate} 
                  onClickSchedule={onClickSchedule}
               />
            }

         </div>
       
      </Styled.MySchedule>
   );
}


const Styled = {
   MySchedule: styled.div`
      
   `,
}


export default withLayout(MySchedule);