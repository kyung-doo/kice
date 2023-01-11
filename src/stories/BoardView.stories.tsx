import { ComponentStory, ComponentMeta } from '@storybook/react';
import BoardView from '../components/BoardView';

export default {
  title: 'components/BoardView',
  component: BoardView,
  argTypes: {
    
  },
} as ComponentMeta<typeof BoardView>;

const contents = {
  idx : 14,
  tit:'학업성적관리규정 및 3학년 2학기 평가계획(영어)',
  info:{
    status:'답변완료',
    file: 'a', 
    answerDate :'2022-02-02',
    registrant: '이연주', 
    view: 125,
    rgtDate: '2022-12-01'
 },
  con: '본문내용',
  comment: [
     {
        writer: '송선생',
        txt: '관리규정 세부항목에 대한 자료도 있으면 부탁드립니다.'
     },
     {
        writer: '이선생',
        txt: '댓글입니다.'
     },
  ],
  answer : '답변내용입니다.',
  prePage:{
     pageId : 13,
     tit: '이전글 타이틀'
  },
  
  nextPage:{
     pageId : 15,
     tit: '다음글 타이틀'
  }
}

const Template: ComponentStory<typeof BoardView> = (args) => {
 

  return(
    <BoardView 
      contents={contents}
      isComment={true}
      isAnswer
      info={[
        { label:'첨부파일', value: contents.info.file },
        { label:'조회수', value: contents.info.view },
        { label:'등록일', value: contents.info.rgtDate }
     ]}
    />
  )
};

export const Default = Template.bind({});





