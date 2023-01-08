import { ComponentStory, ComponentMeta } from '@storybook/react';
import Board from '../components/Board';
import Button from '../components/Button';

export default {
  title: 'components/Board',
  component: Board,
  argTypes: {
  },
} as ComponentMeta<typeof Board>;


const Template: ComponentStory<typeof Board> = ( args ) => <Board {...args} />;


// 보드 타이틀
const boarderTitle = [
  {name: '신청일', w: '8%'},
  {name: '지역', w: '5%'},
  {name: '학교급', w: '5%'},
  {name: '학교명', w: '8%'},
  {name: '소재지', w: '8%'},
  {name: '일시', w: ''},
  {name: '방식', w: '5%'},
  {name: '영역', w: '12%'},
  {name: '신청서', w: '6%'},
  {name: '신청현황', w: '6%'},
  {name: '예비신청', w: '6%'},
  {name: '선택현황', w: '6%'},
]


// dummy 보드 데이터
const boardData = {
  currentPage: 1,
  listLength: 345,
  listView: 15,
  lists: [{}]
};
const lists: {}[] = [];
Array.from(Array(boardData.listView), (k, i) => lists.push({
  listId: 0,
  regDate: '2022-12-01',
  location: '부산',
  schoolType: '초등',
  school: '일동초등학교',
  addr: '사하구 일동',
  date: '2023-01-02(월) 15:00~16:00',
  type: '온라인',
  domain: '서술형평가도구개발',
  applyCount: '2/2',
  preApply: 5,
  selected: 1 
}));
boardData.lists = lists;


export const Default = Template.bind({});

Default.args = {
  useCHeckbox: true,
  listLength: boardData.listLength,
  listView: boardData.listView,
  currentPage: boardData.currentPage,
  boardTItle: boarderTitle,
  baordEl: boardData && boardData.lists.map(( data: any, i ) => (
    <>
      <div style={{width: boarderTitle[0].w}}>{data.regDate}</div>
      <div style={{width: boarderTitle[1].w}}>{data.location}</div>
      <div style={{width: boarderTitle[2].w}}>{data.schoolType}</div>
      <div style={{width: boarderTitle[3].w}}>{data.school}</div>
      <div style={{width: boarderTitle[4].w}}>{data.addr}</div>
      <div style={{flex: 1}}>{data.date}</div>
      <div style={{width: boarderTitle[6].w}}>{data.type}</div>
      <div style={{width: boarderTitle[7].w}}>{data.domain}</div>
      <div style={{width: boarderTitle[8].w}}>
        <Button as="a">보기</Button>
      </div>
      <div style={{width: boarderTitle[9].w}}>{data.applyCount}</div>
      <div style={{width: boarderTitle[10].w}}>{data.preApply}</div>
      <div style={{width: boarderTitle[11].w}}>
        <span className={`${data.selected ? 'on' : 'off'}`}>{data.selected ? '선택하기' : '선택해제'}</span>
      </div>
    </>
 ))
}