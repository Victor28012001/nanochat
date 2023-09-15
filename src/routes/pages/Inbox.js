import React from 'react'
import {ContentHeader} from '../../components/ContentHeader';
import {TableConversations1} from '../../components/Tables'
import PhoneUI from '../../components/PhoneUI';
import Dashboards from '../Dashboards';

const Inbox = () => {
  return (
    <Dashboards>
    <div className='flex w-full'>
      <div className='flex flex-col w-[60%] mt-[80px]'>
        <ContentHeader />
        <TableConversations1 />
      </div>
      <div className="flex flex-col w-[40%] px-12 justify-between">
        <PhoneUI />
      </div>
    </div>
    </Dashboards>
  )
}

export default Inbox
