import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useCallback } from 'react';
import { OptionProps } from 'react-select';
import Select from '../components/Select';


export default {
  title: 'components/Select',
  component: Select,
  argTypes: {
    
  },
} as ComponentMeta<typeof Select>;

const selectOptions = [
   { value: 'option1', label: 'option1' },
   { value: 'option2', label: 'option2' },
   { value: 'option3', label: 'option3' }
];

const Template: ComponentStory<typeof Select> = (args) => {

   const onChange = useCallback((option: any) => {
      console.log('select 변경: ', option);
   },[]);

   
   return(
      <Select 
         options={selectOptions} 
         onChange={onChange}
         {...args} 
      />
   );
};

export const Default = Template.bind({});
Default.args = {
   defaultValue: selectOptions[0] 
};

export const PlaceHolder = Template.bind({});
PlaceHolder.args = {
   placeholder: '선택해 주세요.'
};


