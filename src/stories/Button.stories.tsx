import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';


export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>버튼</Button>;

export const Default = Template.bind({});


export const Atag = Template.bind({});
Atag.args = {
  as: 'a',
  href: '#'
}

