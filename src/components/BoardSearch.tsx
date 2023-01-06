import { FC, HTMLProps, useState } from "react";
import styled, { css } from 'styled-components';
import Select from "./Select";
import Textbox from "./Textbox";
import Button from "./Button";




export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 검색시에
    */
   onSearch ?: (a: string, b: string) => void;
 /**
  * 셀렉트 옵션
  */
  options ?: any;
  
}

/**
 * 버튼 컴포넌트
 */
const BoardSearch: FC<Props & {as?: any}> = ({ 
   className,
   onSearch,
   options
  
}) => {

   const [keyword, setKeyword] = useState<any>('');
   const [type, setType] = useState(options[0]);

   return (
      <Styled.BoardSearch>
         <Select options={options} defaultValue={type} />
         <Textbox value={keyword} onChange={setKeyword} />
         <Button onClick={(e : React.MouseEvent<HTMLButtonElement>) => onSearch && onSearch(type,keyword)}>검색</Button>
         <Button>등록</Button>
      </Styled.BoardSearch>
    
   );
}

const Styled = {
   BoardSearch : styled.div<Props>`
      display: flex;
   `,
}

export default BoardSearch;