import { ComponentType, FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';



const Header:FC = () => {

   const location = useLocation();

   useEffect(()=>{
      console.log("경로: ", location);
   }, [location]);

   return (
      <Styled.Header>
         header 영역
      </Styled.Header>
   );
};


const Styled = {
   Header: styled.div`
      position: relative;
      width: 100%;
      height: 100px;
      background-color: #ccc;
   `,
}

export default Header;