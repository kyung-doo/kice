import { FC, HTMLProps, useState } from "react";
import styled, { css } from 'styled-components';
import Select from "./Select";
import Textbox from "./Textbox";
import Button from "./Button";

export interface Props extends HTMLProps<HTMLDivElement> {
   /**
    * 검색 클릭시 콜백
    */
   onSearch ?: (a: string, b: string) => void;
 /**
  * 셀렉트 옵션
  */
  options ?: any;
  
}

/**
 *  검색 등록 컴포넌트
 */
const BoardSearch: FC<Props & {as?: any}> = ({ 
   className,
   onSearch,
   options
  
}) => {

   const [keyword, setKeyword] = useState<any>('');
   const [type, setType] = useState(options[0]);
   console.log(type);

   return (
      <Styled.BoardSearch>
         <Select className={'searchSelect mr5'} options={options} defaultValue={type} onChange={setType}/>
         <Textbox className={'mr5'} value={keyword} onChange={setKeyword} />
         <Button className={'mr5'} onClick={(e : React.MouseEvent<HTMLButtonElement>) => onSearch && onSearch(type,keyword)}>검색</Button>
         <Button>등록</Button>
      </Styled.BoardSearch>
   );
}

const Styled = {
   BoardSearch : styled.div<Props>`
      display: flex;
      height: 50px;
   `,
}

export default BoardSearch;