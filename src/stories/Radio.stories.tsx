import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Radio from '../components/Radio';
import RadioGroup from '../components/RadioGroup';


export default {
  title: 'components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    
  },
} as ComponentMeta<typeof RadioGroup>;


const Template: ComponentStory<typeof RadioGroup> = ({ arrow }) => {

   const [value, setValue] = useState<string>('value1');

   return(
      <RadioGroup 
         value={value} 
         onChange={setValue}
         arrow={arrow}
      >
         <Radio
            name="radio" 
            label='라디오1'
            value="value1"
         />
         <Radio
            name="radio" 
            label='라디오2'
            value="value2"
         />
         <Radio
            name="radio" 
            label='라디오3'
            value="value3"
         />
      </RadioGroup>
   );
};

export const Default = Template.bind({});




