import { ComponentType, FC } from "react";
import styled from 'styled-components';
import useUser from "../hooks/useUser";
import Footer from "./Footer";
import Header from "./Header";


const withLayout = ( Component: ComponentType ): FC => () => {

   const { userData } = useUser();

   return (
      <Styled.Container>
         <Header />
         <div className="content">
            <Component />
         </div>
         <Footer />
      </Styled.Container>
   )
}


const Styled = {
   Container: styled.div`
      position: relative;
      width: 1200px;
      margin: 0 auto;
      .content {
         min-height: 500px;
      }
   `,
}

export default withLayout;