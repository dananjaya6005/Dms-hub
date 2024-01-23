import React from 'react';
import ClientsLinePlotChart from '../../components/ClientsLinePlotChart';
import { Card, Col, ConfigProvider, Row, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import googleAdsLogo from '../../assets/google_ads_logo.png';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';


interface DataType {
  key: React.Key;
  task: string;
  urgency: string;
  client: string;
  status: string;
}


const columns: TableColumnsType<DataType> = [
  {
    title: 'Task',
    dataIndex: 'task',

  },
  {
    title: 'Urgency',
    dataIndex: 'urgency',
    filters: [
      {
        text: 'very high',
        value: 'very_high',
      },
      {
        text: 'High',
        value: 'high',
      },
      {
        text: 'Medium',
        value: 'medium',
      },
    ]
    
  },
 

  {
    title: 'Client',
    dataIndex: 'client',
  },

  {
    title: 'Status',
    dataIndex: 'status',
  }


];


const data: DataType[] = [
  {
    key: '1',
    task : 'Finalize marketing proposal ',
    urgency : 'very high',
    client : 'DFCC',
    status : 'Pending'

  },

  {
    key: '2',
    task : 'Update website design',
    urgency : 'high',
    client : 'XYZ Ltd',
    status : 'Ongoing'

  },

  {
    key: '3',
    task : 'Prepare end-of-month report',
    urgency : 'Medium',
    client : 'DEF Industries',
    status : 'Ongoing'

  },
  {
    key: '4',
    task : 'Plan social media campaign',
    urgency : 'Medium',
    client : 'GHI Inc',
    status : 'Pending'

  },
  

 
  


];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};




export default function DashboardContext() {
  return (
    <>
      <div className='w-full' >
      
        <div className='bg-white m-5 py-5 flex rounded-md justify-evenly ' >
          <div className=''><ClientsLinePlotChart /></div>

          <div>
          <div className='bg-white shadow-lg h-fit p-10 rounded-xl px-20 ' >
            <img src={googleAdsLogo} alt="Google Ads Logo" className='w-44 mb-2' />

            <ConfigProvider
              theme={{
                components: {
                  Statistic: {
                    contentFontSize : 35,
                    titleFontSize : 20,
                  },
                },
              }}
            >
                <Statistic
              title="Ad spend"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />

            </ConfigProvider>

          </div>

          <div className='bg-white shadow-lg my-5 rounded-xl p-10'>
            <p className='text-lg font-medium text-gray-600'>Client Retention (Monthly) </p>
            <p className='text-4xl my-2 text-gray-700 font-semibold ' >17</p>
          </div>

          </div>
        </div>
        <div className='bg-white m-5 rounded-md '>
        <p className='text-xl font-medium p-5 text-gray-700'>Urgent Tasks Highlight</p>
        <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </>
  )
}
