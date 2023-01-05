import { FC, useCallback, useState } from "react";
import styled from 'styled-components';
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import Button from "../components/Button";

const Testpage: FC = () => {
   // 페이지네이션 
   let [currentPage, setCurrentPage] = useState<number>(1);
   // 모달
   let [modal, setModal] = useState<boolean>(false);

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
                     <Button>취소</Button>
                     <Button>발송</Button>
                  </>
               }
               setModal={setModal}>
               <p>모달내용</p>
            </Modal>
         }
      </Styled.Testpage>
   );
}


const Styled = {
   Testpage: styled.div`
      
   `,
}


export default Testpage;