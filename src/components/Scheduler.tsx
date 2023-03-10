import { FC, HTMLProps, memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from 'styled-components';
import Button from "./Button";
import { toLunar } from '../utils/toLunar';




export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 데이 이름 [일, 월, 화, 수, 목, 금, 토]
    */
   dayNames?: string[];
   /**
    * 스케쥴 데이터
    */
   scheduleData?: any[];
   /**
    * 스케쥴 날짜 변경
    */
   onChangeDate?: ( year: number, month: number ) => void;
   /**
    * 스케쥴 클릭 이벤트
    */
   onClickSchedule?: ( scheduleId: string ) => void;

}

// 양력 휴일
const solarHolidays = [
   {month: 1, day: 1, name: '신정'},
   {month: 3, day: 1, name: '3.1절'},
   {month: 5, day: 5, name: '어린이날'},
   {month: 6, day: 6, name: '현충일'},
   {month: 8, day: 15, name: '광복절'},
   {month: 10, day: 3, name: '개천절'},
   {month: 10, day: 9, name: '한글날'},
   {month: 12, day: 25, name: '크리스마스'},
];

const lunarHolidays = [
   {month: 12, day: 30, name: '설연휴'},
   {month: 1, day: 1, name: '설날'},
   {month: 1, day: 2, name: '설연휴'},
   {month: 4, day: 8, name: '부천님오신날'},
   {month: 8, day: 14, name: '추석연휴'},
   {month: 8, day: 15, name: '추석'},
   {month: 8, day: 16, name: '추석연휴'},
];


/**
 * 스케쥴러 컴포넌트
 */
const Scheduler: FC<Props & {as?: any}> = ({ 
   className,
   dayNames = ['일', '월', '화', '수', '목', '금', '토'],
   scheduleData,
   onChangeDate,
   onClickSchedule,
   as,
   ...props
}) => {

   const [date, ] = useState<Date>(new Date());
   const [dates, setDates] = useState<{year:number, month:number, day: number, type: string, holiday?: string, luna?: string}[]>([]);

   const now = new Date();
   const month = now.getMonth() + 1;
   const nowDate = now.getDate();
   const tomorrow =  new Date(now.setDate(now.getDate() + 1));
   const tDate = tomorrow.getDate();
   const tMonth = tomorrow.getMonth() + 1;

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
            thisDates.push({year:viewYear, month: viewMonth, day: i+1, type: 'normal today'});
         } else {
            thisDates.push({year:viewYear, month: viewMonth, day: i+1, type: 'normal'});
         }
      }

      if (PLDay !== 6) {
         for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift({year:viewMonth === 0 ? viewYear-1 : viewYear, month: viewMonth-1 === -1 ? 11 : viewMonth-1, day: PLDate - i, type: 'prev'});
         }
      }

      for (let i = 1; i < 7 - TLDay; i++) {
         nextDates.push({year:viewMonth === 11 ? viewYear+1 : viewYear , month: viewMonth+1 === 12 ? 0 : viewMonth+1, day: i, type: 'next'})
      }

      const dates: {year:number, month:number, day: number, type: string, holiday?: string, luna?: string}[] = prevDates.concat(thisDates, nextDates);
      dates.forEach((date, i) => {
         const solarFind = solarHolidays.find(x => x.month === date.month+1 && x.day === date.day);
         if(solarFind) {
            date.type = date.type + " holiday";
            date.holiday = solarFind.name;
         }
         const lunar = toLunar(date.year, date.month+1, date.day);
         if(lunar){
            const lunarFind = lunarHolidays.find(x => x.month === lunar.month && x.day === lunar.day);
            if(lunarFind) {
               date.type = date.type + " holiday";
               date.holiday = lunarFind.name;
            }
            date.luna = `${lunar.month}/${lunar.day}`;
         }
      });
      setDates(dates);
   }

   const onPrevMonth = useCallback(() => {
      date.setDate(1);
      date.setMonth(date.getMonth()-1);
      if(onChangeDate) onChangeDate(date.getFullYear(), date.getMonth()+1);
      setCalendar(date);
   }, [date, dates]);

   const onPrevYear = useCallback(() => {
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
      date.setFullYear(date.getFullYear()+1);
      if(onChangeDate) onChangeDate(date.getFullYear(), date.getMonth()+1);
      setCalendar(date);
   }, [date, dates]);

   const findSchedule = useCallback(( num: number ) => {
      if(!scheduleData) return null;
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
                           `day ${sunday ? 'sunday': ''} ${saturday ? 'saturday': ''} ${date.type}`
                        }
                     >
                        <div className="number">
                           {date.day}
                           {date.holiday && <span>{date.holiday}</span>}
                        </div>
                        {findSchedule(date.day) && 
                           <ul className="schedule-list">
                              {findSchedule(date.day).lists.map((list: any) => (
                                 <li key={`schedule${list.scheduleId}`}>
                                    <Button 
                                       as='a' 
                                       onClick={() => onClickSchedule && onClickSchedule(list.scheduleId)}
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
            <ul className="scheduleTable mt10">
               <li>
                  <div className="tit">오늘 일정<br/>
                     {month}월{nowDate}일
                  </div>
                  <div className="pl10">오늘 일정이 없습니다.</div>
               </li>
               <li>
                  <div className="tit">
                     내일 일정<br/>
                     {tMonth}월{tDate}일
                  </div>
                  <div className="pl10">내일 일정이 없습니다.</div>
               </li>
        </ul>
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
            min-height: 100px;
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
            &.saturday {
               .number{
                  color: blue;
               }
            }
            &.sunday,
            &.holiday {
               .number{
                  color: red;
               }
            }
            &.today {
               background-color: #bdffbd;
            }
            .number > span {
               margin-left: 5px;
            }
         }
      }
      .scheduleTable{
         li{
            border: 1px solid #6c9a9e;
            display:flex;
            &:first-child{
               border-bottom: none;
            }
            .tit{
               border-right: 1px solid #6c9a9e;
               background: #b7fdff;
               height: 50px;
               width: 100px;
            }
            > div{
               display: flex;
               align-items: center;
               justify-content: center;
            }
            
         }
      }
      
   `,
}

export default memo(Scheduler);