import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from '../components/Pagination';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Pagination',
  component: Pagination,
  argTypes: {
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args}>버튼</Pagination>;

export const Default = Template.bind({});
Default.args = {
  listLength : 340,
  listView : 10,
  pageView : 10,
  currentPage: 1
  
}
