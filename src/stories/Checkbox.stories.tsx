import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Checkbox';


export default {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
    
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
   label: '체크해 주세요.'
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
   label: '체크해 주세요.',
   labelArrow: 'left'
};


