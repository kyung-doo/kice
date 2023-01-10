import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import withLayout from "../../layout/withLayout";
import queryString from 'query-string';
import ContentsTitle from "../../components/ContentsTitle";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";


const ReceiveNote: FC = () => {

   const { search } = useLocation();
   const query = queryString.parse(search);
   const [list,setList] = useState< {}[] | null>(null);
   const [checkList, setCheckList] = useState<any>([]);

   const onCheck = (checked: boolean, id : number) => {
      if(checked){
         setCheckList([...checkList, id]);
      }else{
         setCheckList(checkList.filter((a : number) => a !== id));
      }
   }

   const removeNote = () => {

      if(checkList.length === 0) return window.alert('1개 이상 선택하세유');
      if(window.confirm('삭제해유?')){
         window.alert('삭제완료!');
         window.location.reload();
      } 
   
   }

   useEffect(() => {
    
      let arr : {}[] = [];
    
      Array.from(Array(35), (k,i) => arr.push({
         listId: i,
         regDate: '2022-12-01',
         title: '쪽지내용입니다. 쪽지내용입니다. 쪽지내용입니다. 쪽지내용입니다.',
      }));
    
      setList(arr);
      console.log('query: ', query);
   
   },[]);
   
   return (
      <Styled.ReceiveNote>
         <ContentsTitle depth1={'마이페이지'} depth2={'받은 쪽지'} />
         <div className="con-top mb10">
            <Button onClick={removeNote}>선택삭제</Button>
         </div>
         <div className="lists">
            {
               list && list.map((data : any)=>{
                  return(
                     <div className="lists-line">
                        <div>
                           <Checkbox 
                              onChange={(e: ChangeEvent<HTMLInputElement>) => onCheck(e.target.checked, data.listId)} 
                              checked={checkList.includes(data.listId)}
                           />
                        </div>
                        <div style={{ width: '80%' }}>{data.title}</div>
                        <div style={{ width: '10%' }}>{data.regDate}</div>
                        <div style={{ width: '10%' }}>
                           <Button>읽음</Button> <Button>삭제</Button>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </Styled.ReceiveNote>
   );
}

const Styled = {
   ReceiveNote: styled.div`
   .lists{
      max-height: 500px;
      overflow: auto;
      border-top: 2px solid #ccc;
      &-line{
         border-bottom: 1px solid #ccc;
         display: flex;
         padding: 10px;
      }
   }
   `,
}

export default withLayout(ReceiveNote);
