import { FC, HTMLProps, useState,useEffect, MouseEventHandler, useCallback,useRef } from "react";
import styled, { css } from 'styled-components';
import Button from "./Button";
import TextArea from "./TextArea";
import useUser from "../hooks/useUser";


export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 댓글기능 유무
    */
   isComment ?: boolean;
   /**
    * 답변기능 유무
    */
   isAnswer ?: boolean;
   /**
    * 콘텐츠 정보
    */
   info ?: any;
   /**
    * 콘텐츠 내용
    */
   contents ?: any;

}

/**
 * 게시판 상세 컴포넌트
 */
const BoardView: FC<Props & {as?: any}> = ({ 
   className,
   isComment=false,
   isAnswer=false,
   contents,
   info
}) => {

   const [comment,setComment] = useState<string>('');
   const [cmmtList, setCmmList] = useState<{}[]>([]);
   const { userData } = useUser();

   const addCmmt = ( _txt : string) => {

      if(!_txt) return window.alert('댓글 입력바람');

      setCmmList([
         ...cmmtList,
         { idx : cmmtList.length, txt: _txt }
      ])

      setComment('');
   };

   const removeCmmt = useCallback((id : number) => {
      setCmmList(cmmtList.filter((a:any)=> a.idx !== id));
   },[cmmtList]);

   return (
      <Styled.BoardView className={className}>
         <div className="view-tit">{contents.tit}</div>
         {
            info && (
               <div className="view-info pt10 pb10">
                  {
                     info.map((item:any)=>{
                        return(
                           <div className="mr20">{item.label} : {item.value}</div>
                        )
                     })
                  }
            </div>
            )
         }
         <div className="view-con">
            <div className="txt">
               {contents.con}
            </div>
            {
               isComment && (
               <div className="comment">
                  <div className="comment-input">
                        <TextArea 
                        value={comment} 
                        onChange={(e) => comment.length < 120 && setComment(e.target.value)}
                        className='l'
                        placeholder="댓글을 작성해 주세요"
                        onKeyDown={(e)=>{
                           if(e.keyCode == 13){
                              addCmmt(comment);
                           }
                        }}
                        />
                        <div className="r">
                           <span>{comment.length} / 120자</span>
                           <Button onClick={() => addCmmt(comment)}>등록</Button>
                        </div>
                  </div>
                  <ul className="comment-list mb10">
                  {
                     cmmtList.map((item:any)=>{
                        return(
                           <li key={item.idx}>
                              {/* <div style={{ width: '10%' }}>{userData.id}</div> */}
                              <div style={{ width: '10%' }}>사용자</div>
                              <div style={{ width: '90%' }}>{item.txt}</div>
                              <Button onClick={()=>removeCmmt(item.idx)}>X</Button>
                           </li>
                        )
                     })
                     }
                  </ul>
               </div>
               ) 
            }
            {
               isAnswer && (
                  <div className="answer mb10">
                        {contents.answer}
                     <div className="buttons">
                        <Button className="mr5">삭제</Button>
                        <Button>수정</Button>
                     </div>
                  </div>
               )
            }
            <div className="prevNext mb10">
               <div className={`line ${ contents.nextPage ? '' : 'disabled' }`}>
                  <div className="l">{ contents.nextPage?.tit && '▲ 다음 글' }</div>
                  <div className="r pl10">{ contents.nextPage?.tit }</div>
               </div>
               <div className={`line ${ contents.prePage ? '' : 'disabled' }`}>
                  <div className="l">{ contents.prePage?.tit && '▼ 이전 글' }</div>
                  <div className="r pl10">{ contents.prePage?.tit }</div>
               </div>
            </div>
         </div>
         <div className="view-foot mb10 align-center">
            <Button className="center">목록</Button>
            <Button className="mr5">삭제</Button>                       
            <Button>수정</Button>
         </div>
      </Styled.BoardView>
   );
}

const Styled = {
   BoardView: styled.div<Props>`
   .view{
      &-tit{
         border-bottom: 1px solid #ccc;
         border-top: 1px solid #ccc;
         padding: 10px 0;
         text-align: center;
      }
      &-info{
         display: flex;
         justify-content: flex-end;
         border-bottom: 1px solid #ccc;
      }
      &-con{
         .txt{
            min-height: 300px;
            padding: 20px;
         }
         .comment{
            &-input{
               display: flex;
               width: 100%;
               .l{
                  width: 90%;
               }
               .r{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 10%;
               }
            }
            &-list{
               li{
                  display: flex;
                  border-bottom: 1px solid #ccc;
                  padding: 10px;
               }
            }
         }
         .answer{
            height: 100px;
            background: #f2f2f2;
            position: relative;
            padding: 10px;
            .buttons{
               position: absolute;
               right: 10px;
               top: 10px;
            }
         }
         .prevNext{
            border-top: 1px solid #ccc;
            .line{
               display: flex;
               border-bottom: 1px solid #ccc;
               height: 40px;
               cursor: pointer;
               .l,.r{
                  display: flex;
                  align-items: center;
               }
               .l{
                  border-right: 1px solid #ccc;
                  background: #ddd;
                  width: 100px;
                  justify-content: center;
               }
               &.disabled{
                  cursor: default;
               }
            }
         }
     &-foot{
        display: flex;
        justify-content: flex-end;
        position: relative;
        .center{
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
        }
     }
   }
   `,
}

export default BoardView;