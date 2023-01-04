import { ResultType } from "@remix-run/router/dist/utils";
import { FC, HTMLProps, useCallback, useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import { createImportSpecifier } from "typescript";

export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 총리스트 개수
    */
   listLength: number;
   /**
    * 보여질 리스트 개수
    */
   listView: number;
   /**
    * 보여질 페이지 개수
    */
   pageView: number;
   /**
    * 현재 페이지 넘버
    */
   currentPage: number;
   /**
    * 현재 페이지 넘버state
    */
    setCurrentPage : (i : number) => void;
   /**
    * 페이지 클릭시 콜백
    */
   // onPage?: (idx: number) => void;
}

/**
 * 버튼 컴포넌트
 */
const Pagination: FC<Props & {as?: any}> = ({ 
   className,
   ...props
}) => {

   let { listLength,listView, pageView ,currentPage, setCurrentPage} = props;

   let totalPage = listLength % listView > 0 ? Math.floor(listLength/listView) + 1 : listLength/listView;
   let groupLength = Math.ceil( totalPage / pageView );
   let groupCount = Math.ceil( currentPage / pageView);
   let firstPage = groupCount * pageView - (pageView - 1);
   let lastPage = groupCount * pageView;

   const showPageNum = useCallback(() => {

      if( totalPage < lastPage ){
         lastPage = totalPage;
      }

      let arr = [];
      for(let i = firstPage; i <= lastPage; i++){
         arr.push(<li onClick={()=>setCurrentPage(i)} className={currentPage === i ? 'active' : ''}>{i}</li>)
      }
      return arr;

   }, [currentPage]);

   return (
      <Styled.Pagination className={className} {...props}>
         <div className="row" style={{ display:'flex' }}>
            {
               groupCount > 1 && (
                  <>
                     <button onClick={()=>setCurrentPage(1)}>◀◀</button>
                     <button onClick={()=>{
                        currentPage <= listView ? setCurrentPage(1) : setCurrentPage(currentPage - listView)
                     }}>◀</button>
                  </>
               )
            }
            <ol style={{ display:'flex' }}>
               {showPageNum()}
            </ol>
            <button onClick={()=>{
               currentPage < totalPage && groupCount < groupLength 
               ? setCurrentPage(currentPage + listView) 
               : setCurrentPage(lastPage);
            }}>▶</button>
            <button onClick={()=>setCurrentPage(totalPage)}>▶▶</button>
         </div>
      </Styled.Pagination>
   );
}

const Styled = {
   Pagination: styled.div<Props>`
      ol{
         li{
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            line-height: 30px;
            text-align: center;
            border-radius: 4px;
            margin: 0 2px;
            cursor: pointer;
            &.active{
               background: yellowgreen;
               color: #fff;
               border: none;
            }
         }

      }  
     
      
   `,
}

export default Pagination;