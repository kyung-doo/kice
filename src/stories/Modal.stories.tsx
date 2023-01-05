import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';


export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {

  let [modal, setModal] = useState<boolean>(true);
  
  return (
    <>
      <Button onClick={()=>setModal(true)}>모달버튼</Button>
      {modal &&  
        <Modal 
          head={<h2 className="modal-title">모달타이틀</h2>}
          foot={
            <>
                <Button onClick={()=>setModal(false)}>취소</Button>
                <Button>발송</Button>
            </>
          }
          setModal={setModal} 
        >
          모달내용
        </Modal>
      }
    </>
 );
}



export const Default = Template.bind({});

