import { ChangeEvent, createContext, FC, HTMLProps, useState } from "react";
import styled from 'styled-components';
import Checkbox from "./Checkbox";


export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 체크박스 사용 유무
    */
   useCHeckbox?: boolean;
   /**
    * 게시판 타이틀 정보
    */
   boardTItle: {name: string, w: string}[];
    /**
    * 게시판 리스트 element
    */
   baordEl?: JSX.Element[];
   /**
    * 리스트 총개수
    */
   listLength: number;
   /**
    * 보여질 리스트 개수
    */
   listView: number;
   /**
    * 현재 페이지
    */
   currentPage: number;
}


/**
 * 게시판 컴포넌트
 */
const Board: FC<Props & {as?: any}> = ({ 
   className,
   useCHeckbox,
   listLength,
   listView,
   currentPage,
   baordEl,
   boardTItle,
   ...props
}) => {

   const [checkAll, setCheckAll] = useState<boolean>(false);

   return (
      <Styled.Board className={className} {...props}>
         <div className="board-count">전체 {listLength}건</div>
         <div className="board-head">
            {useCHeckbox && 
               <div className="title" style={{width: '3%'}}>
                  <Checkbox 
                     checked={checkAll} 
                     onChange={() => setCheckAll(!checkAll)} 
                  />
               </div>
            }
            <div className="title" style={{width: '3%'}}></div>
            {boardTItle && boardTItle.map( data => (
               <div key={data.name} className="title" style={{width: data.w === '' ? 'auto' : data.w, flex: data.w === '' ? 1 : ''}}>{data.name}</div>
            ))}
         </div>
         <div className="board-body">
            {baordEl && baordEl.length > 0
               ? 
               baordEl.map((el, i) => (
                  <div key={`board-list-${i}`} className="list">
                     {useCHeckbox && 
                        <div style={{width: '3%'}}>
                           <Checkbox />
                        </div>
                     }
                     <div style={{width: '3%'}}>{listLength - (listView * (currentPage -1)) - i}</div>
                     {el}
                  </div>
               ))
               :
               <div className="no-list">게시물이 없습니다.</div>
            }
         </div>
      </Styled.Board>
   );
}

const Styled = {
   Board: styled.div<Props>`
      width: 100%;
      .board-count{
         margin-bottom: 10px;
      }
      .board-head {
         display: flex;
         flex-direction: row;
         width: 100%;
         border-top: solid 2px #000;
         border-bottom: solid 1px #000;
         padding: 10px 0;
         background-color: #e9e9e9;
         .title {
            display: flex;
            align-items: center;
            justify-content: center;
            > label {
               padding-left: 20px;
            }
         }
      }
      .board-body {
         width: 100%;
         border-bottom: solid 2px #000;
         .list {
            display: flex;
            flex-direction: row;
            width: 100%;
            &:not(:first-child) {
               border-top: solid 1px #ccc;
            }
            > div {
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 12px;
               padding: 5px 0;
               > label {
                  padding-left: 20px;
               }
            }
         }
         .no-list{
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            padding: 20px;
         }
      }
   `,
}

export default Board;