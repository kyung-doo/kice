import { FC, HTMLProps, memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from 'styled-components';
import Button from "./Button";




export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 데이 이름 [일, 월, 화, 수, 목, 금, 토]
    */
   dayNames?: string[];
   /**
    * 스케쥴 데이터
    */
   scheduleData: any[];
   /**
    * 스케쥴 날짜 변경
    */
   onChangeDate?: ( year: number, month: number ) => void;
   /**
    * 스케쥴 클릭 이벤트
    */
   onCickSchedule?: ( scheduleId: string ) => void;

}

/**
 * 스케쥴러 컴포넌트
 */
const Scheduler: FC<Props & {as?: any}> = ({ 
   className,
   dayNames = ['일', '월', '화', '수', '목', '금', '토'],
   scheduleData,
   onChangeDate,
   onCickSchedule,
   as,
   ...props
}) => {

   const [date, ] = useState<Date>(new Date());
   const [dates, setDates] = useState<{num: number, type: string}[]>([]);

   const setCalendar = ( date: Date ) => {
      
      const viewYear = date.getFullYear();
      const viewMonth = date.getMonth();

      const prevLast = new Date(viewYear, viewMonth, 0);
      const thisLast = new Date(viewYear, viewMonth + 1, 0);

      const PLDate = prevLast.getDate();
      const PLDay = prevLast.getDay();

      const TLDate = thisLast.getDate();
      const TLDay = thisLast.getDay();

      const prevDates = [];
      const thisDates = [];
      const nextDates = [];

      const toDay = new Date();

      for(let i=0; i<TLDate; i++) {
         if(viewMonth === toDay.getMonth() && viewYear === toDay.getFullYear() && i + 1 === toDay.getDate()){
            thisDates.push({num: i+1, type: 'normal today'});
         } else {
            thisDates.push({num: i+1, type: 'normal'});
         }
      }

      if (PLDay !== 6) {
         for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift({num: PLDate - i, type: 'prev'});
         }
      }

      for (let i = 1; i < 7 - TLDay; i++) {
         nextDates.push({num: i, type: 'next'})
      }

      const dates = prevDates.concat(thisDates, nextDates);
      setDates(dates);
   }

   const onPrevMonth = useCallback(() => {
      date.setDate(1);
      date.setMonth(date.getMonth()-1);
      if(onChangeDate) onChangeDate(date.getFullYear(), date.getMonth()+1);
      setCalendar(date);
   }, [date, dates]);

   const onPrevYear = useCallback(() => {
      date.setMonth(1);
      date.setFullYear(date.getFullYear()-1);
      if(onChangeDate) onChangeDate(date.getFullYear(), date.getMonth()+1);
      setCalendar(date);
   }, [date, dates]);

   const onNextMonth = useCallback(() => {
      date.setDate(1);
      date.setMonth(date.getMonth()+1);
      if(onChangeDate) onChangeDate(date.getFullYear(), date.getMonth()+1);
      setCalendar(date);
   }, [date, dates]);

   const onNextYear = useCallback(() => {
      date.setMonth(1);
      date.setFullYear(date.getFullYear()+1);
      if(onChangeDate) onChangeDate(date.getFullYear(), date.getMonth()+1);
      setCalendar(date);
   }, [date, dates]);

   const findSchedule = useCallback(( num: number ) => {
      const find = scheduleData.find(data => {
         const dateStr = data.date.split("/");
         const year = parseInt(dateStr[0]); 
         const month = parseInt(dateStr[1]); 
         const day = parseInt(dateStr[2]);
         return date.getFullYear() === year && date.getMonth()+1 === month && day === num;
      });
      return find;
   }, [date, scheduleData]);


   useEffect(() => {
      setCalendar(date);
   }, [date]);

   

   return (
      <Styled.Scheduler 
         className={className} 
         as={as} 
         {...props}
      >
         <div className="calendar">
            <div className="header">
               <Button className="prevYear" onClick={onPrevYear}>{'<<'}</Button>
               <Button className="prevMonth" onClick={onPrevMonth}>{'<'}</Button>
               <div className="currentDate">{`${date.getFullYear()}년 ${date.getMonth()+1}월`}</div>
               <Button className="prevMonth" onClick={onNextMonth}>{'>'}</Button>
               <Button className="prevYear" onClick={onNextYear}>{'>>'}</Button>
            </div>
            <div className="day-names">
               {Array.from(Array(7), (k, i) => (
                  <div key={`day-name${i}`} className="day-name">{dayNames[i]}</div>
               ))}
            </div>
            <div className="days">
               {dates &&dates.map((date, i) => {
                  const sunday = i % 7 === 0;
                  const saturday = i % 7 === 6;
                  return (
                     <div 
                        key={`day${i}`} 
                        className={
                           `day ${sunday && 'sunday'} ${saturday && 'saturday'} ${date.type}`
                        }
                     >
                        <div className="number">{date.num}</div>
                        {findSchedule(date.num) && 
                           <ul className="schedule-list">
                              {findSchedule(date.num).lists.map((list: any) => (
                                 <li key={`schedule${list.scheduleId}`}>
                                    <Button 
                                       as='a' 
                                       onClick={() => onCickSchedule && onCickSchedule(list.scheduleId)}
                                    >
                                       {list.title}
                                    </Button>
                                 </li>
                              ))}
                           </ul>
                        }
                     </div>
                  )
               })}
            </div>
         </div>
      </Styled.Scheduler>
   );
}

const Styled = {
   Scheduler: styled.div<Props>`
      
      .header{
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         margin-bottom: 10px;
         .currentDate{
            margin: 0 10px;
         }
      }
      .day-names{
         display: flex;
         flex-direction: row;
         border: solid 1px #ccc;
         border-bottom: none;
         .day-name{
            width: calc(100% / 7);
            text-align: center;
            border: solid 1px #ccc;
            padding: 4px;
            box-sizing: border-box;
            background-color: #ffff95;
         }
      }
      .days{
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         border: solid 1px #ccc;
         border-top: none;
         .day{
            width: calc(100% / 7);
            height: 100px;
            padding: 4px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            border: solid 1px #ccc;
            &.prev,
            &.next {
               background-color: #e6e6e6;
               .number {
                  opacity: 0.3;
               }
            }
            &.sunday {
               .number{
                  color: red;
               }
            }
            &.saturday {
               .number{
                  color: blue;
               }
            }
            &.today {
               background-color: #bdffbd;
            }
         }
      }
      
   `,
}

export default memo(Scheduler);