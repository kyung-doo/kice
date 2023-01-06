import { ComponentStory, ComponentMeta } from '@storybook/react';
import BoardSearch  from '../components/BoardSearch';
import { useState } from 'react';


export default {
  title: 'components/BoardSearch',
  component: BoardSearch,
  argTypes: {
    
  },
} as ComponentMeta<typeof BoardSearch>;

const Template: ComponentStory<typeof BoardSearch> = (args) => {

  const selectOptions= [
    {label: 'option1', value: 'value1'},
    {label: 'option2', value: 'value2'},
    {label: 'option3', value: 'value3'},
    {label: 'option4', value: 'value4'},
 ]

 const onSearch = (type: string, keyword: string) : void => {
  console.log(type);
  console.log(keyword);
}
  return(
    <BoardSearch 
        onSearch={onSearch} 
        options={selectOptions}
    />
  )
} 

export const Default = Template.bind({});
