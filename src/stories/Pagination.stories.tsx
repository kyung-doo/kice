import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from '../components/Pagination';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'components/Pagination',
  component: Pagination,
  argTypes: {
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = ({ listLength, listView, pageView}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <Pagination 
      currentPage={currentPage}
      listLength={listLength}
      listView={listView}
      pageView={pageView}
      setCurrentPage={setCurrentPage}>
        버튼
    </Pagination>
  );
}



export const Default = Template.bind({});
Default.args = {
  listLength : 340,
  listView : 10,
  pageView : 10,
}
