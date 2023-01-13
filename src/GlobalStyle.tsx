import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html, body, div, span, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   abbr, address, cite, code,
   del, dfn, em, img, ins, kbd, q, samp,
   small, strong, sub, sup, var,
   b, i,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, figcaption, figure,
   footer, header, hgroup, menu, nav, section, summary,
   time, mark, audio, video {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
      box-sizing: border-box;
   }
   li,ol{
      list-style: none;
   }
   article,aside,details,figcaption,figure,
   footer,header,hgroup,menu,nav,section {
      display:block;
   }
   textarea{
      box-sizing: border-box;
      resize: none;
      &:focus{
         outline: none;
      }
   }

   /* 임시 table 스타일 */
   table{
    padding:0;
    border:0;
    border-spacing:0px;
    border-collapse:collapse;
    width: 100%;
    tr{
      border: 1px solid #ddd;
       th,td{
          padding: 10px;
         }
         th{
            background: #ccc;
            border-right: 1px solid #ddd;
         }
      }
   }

   /* autocomplete */
   input:-webkit-autofill,
   input:-webkit-autofill:hover, 
   input:-webkit-autofill:focus,
   textarea:-webkit-autofill,
   textarea:-webkit-autofill:hover,
   textarea:-webkit-autofill:focus,
   select:-webkit-autofill,
   select:-webkit-autofill:hover,
   select:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
      transition: background-color 5000s ease-in-out 0s;
   }


   /*space*/
   .pl1{padding-left:1px;}
   .pl2{padding-left:2px;}
   .pl3{padding-left:3px;}
   .pl4{padding-left:4px;}
   .pl5{padding-left:5px;}
   .pl7{padding-left:7px;}
   .pl8{padding-left:8px;}
   .pl10{padding-left:10px;}
   .pl12{padding-left:12px;}
   .pl15{padding-left:15px;}
   .pl20{padding-left:20px;}
   .pl25{padding-left:25px;}
   .pl27{padding-left:27px;}
   .pl28{padding-left:28px;}
   .pl30{padding-left:30px;}
   .pl35{padding-left:35px;}
   .pl40{padding-left:40px;}
   .pl50{padding-left:50px;}
   .pl60{padding-left:60px;}

   .pr1{padding-right:1px;}
   .pr2{padding-right:2px;}
   .pr3{padding-right:3px;}
   .pr4{padding-right:4px;}
   .pr5{padding-right:5px;}
   .pr7{padding-right:7px;}
   .pr8{padding-right:8px;}
   .pr10{padding-right:10px;}
   .pr12{padding-right:12px;}
   .pr15{padding-right:15px;}
   .pr20{padding-right:20px;}
   .pr25{padding-right:25px;}
   .pr27{padding-right:27px;}
   .pr28{padding-right:28px;}
   .pr30{padding-right:30px;}
   .pr35{padding-right:35px;}
   .pr40{padding-right:40px;}
   .pr50{padding-right:50px;}
   .pr60{padding-right:60px;}

   .pt1{padding-top:1px;}
   .pt2{padding-top:2px;}
   .pt3{padding-top:3px;}
   .pt4{padding-top:4px;}
   .pt5{padding-top:5px;}
   .pt7{padding-top:7px;}
   .pt8{padding-top:8px;}
   .pt10{padding-top:10px;}
   .pt12{padding-top:12px;}
   .pt15{padding-top:15px;}
   .pt20{padding-top:20px;}
   .pt25{padding-top:25px;}
   .pt27{padding-top:27px;}
   .pt28{padding-top:28px;}
   .pt30{padding-top:30px;}
   .pt35{padding-top:35px;}
   .pt40{padding-top:40px;}
   .pt50{padding-top:50px;}
   .pt60{padding-top:60px;}

   .pb1{padding-bottom:1px;}
   .pb2{padding-bottom:2px;}
   .pb3{padding-bottom:3px;}
   .pb4{padding-bottom:4px;}
   .pb5{padding-bottom:5px;}
   .pb7{padding-bottom:7px;}
   .pb8{padding-bottom:8px;}
   .pb10{padding-bottom:10px;}
   .pb12{padding-bottom:12px;}
   .pb15{padding-bottom:15px;}
   .pb20{padding-bottom:20px;}
   .pb25{padding-bottom:25px;}
   .pb27{padding-bottom:27px;}
   .pb28{padding-bottom:28px;}
   .pb30{padding-bottom:30px;}
   .pb35{padding-bottom:35px;}
   .pb40{padding-bottom:40px;}
   .pb50{padding-bottom:50px;}
   .pb60{padding-bottom:60px;}


   .ml1{margin-left:1px;}
   .ml2{margin-left:2px;}
   .ml3{margin-left:3px;}
   .ml4{margin-left:4px;}
   .ml5{margin-left:5px;}
   .ml7{margin-left:7px;}
   .ml8{margin-left:8px;}
   .ml10{margin-left:10px;}
   .ml12{margin-left:12px;}
   .ml15{margin-left:15px;}
   .ml20{margin-left:20px;}
   .ml25{margin-left:25px;}
   .ml27{margin-left:27px;}
   .ml28{margin-left:28px;}
   .ml30{margin-left:30px;}
   .ml35{margin-left:35px;}
   .ml40{margin-left:40px;}
   .ml50{margin-left:50px;}
   .ml60{margin-left:60px;}

   .mr1{margin-right:1px;}
   .mr2{margin-right:2px;}
   .mr3{margin-right:3px;}
   .mr4{margin-right:4px;}
   .mr5{margin-right:5px;}
   .mr7{margin-right:7px;}
   .mr8{margin-right:8px;}
   .mr10{margin-right:10px;}
   .mr12{margin-right:12px;}
   .mr15{margin-right:15px;}
   .mr20{margin-right:20px;}
   .mr25{margin-right:25px;}
   .mr27{margin-right:27px;}
   .mr28{margin-right:28px;}
   .mr30{margin-right:30px;}
   .mr35{margin-right:35px;}
   .mr40{margin-right:40px;}
   .mr50{margin-right:50px;}
   .mr60{margin-right:60px;}

   .mt1{margin-top:1px;}
   .mt2{margin-top:2px;}
   .mt3{margin-top:3px;}
   .mt4{margin-top:4px;}
   .mt5{margin-top:5px;}
   .mt7{margin-top:7px;}
   .mt8{margin-top:8px;}
   .mt10{margin-top:10px;}
   .mt12{margin-top:12px;}
   .mt15{margin-top:15px;}
   .mt20{margin-top:20px;}
   .mt25{margin-top:25px;}
   .mt27{margin-top:27px;}
   .mt28{margin-top:28px;}
   .mt30{margin-top:30px;}
   .mt35{margin-top:35px;}
   .mt40{margin-top:40px;}
   .mt50{margin-top:50px;}
   .mt60{margin-top:60px;}

   .mb1{margin-bottom:1px;}
   .mb2{margin-bottom:2px;}
   .mb3{margin-bottom:3px;}
   .mb4{margin-bottom:4px;}
   .mb5{margin-bottom:5px;}
   .mb7{margin-bottom:7px;}
   .mb8{margin-bottom:8px;}
   .mb10{margin-bottom:10px;}
   .mb12{margin-bottom:12px;}
   .mb15{margin-bottom:15px;}
   .mb20{margin-bottom:20px;}
   .mb25{margin-bottom:25px;}
   .mb27{margin-bottom:27px;}
   .mb28{margin-bottom:28px;}
   .mb30{margin-bottom:30px;}
   .mb35{margin-bottom:35px;}
   .mb40{margin-bottom:40px;}
   .mb50{margin-bottom:50px;}
   .mb60{margin-bottom:60px;}

   .align-right{text-align:right}
   .align-center{text-align:center}
   .hidden{display:none}
   .flex{display: flex}
   .flex-align{display: flex; align-items: center;}
   .flex-center{display: flex;align-items: center;justify-content: center}
   .flex-between{display: flex;align-items: center;justify-content: space-between;}
   .flex-end{display: flex;align-items: center;justify-content: flex-end;}
   .b-none{border: none !important;}
   

   html, body {
      width: 100%;
      height: 100%;
   }

   body {
      font-family: "Helvetica", "Arial", sans-serif;
      line-height: 1;
   }

   #root {
      position: relative;
      width: 100%;
      height: 100%;
   }
`;

export default GlobalStyle;