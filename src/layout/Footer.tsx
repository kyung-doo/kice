import { ComponentType, FC } from "react";
import styled from 'styled-components';



const Footer:FC = () => {


   return (
      <Styled.Footer>
         footer 영역
      </Styled.Footer>
   );
};


const Styled = {
   Footer: styled.div`
      position: relative;
      width: 100%;
      height: 100px;
      background-color: #ccc;
   `,
}

export default Footer;