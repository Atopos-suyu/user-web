import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { useRef } from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {API} from "@/services/ant-design-pro/typings";
import {searchCollect} from "@/services/ant-design-pro/api";
import { Space, Tag } from 'antd';

export const waitTimePromise  = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

  const columns: ProColumns<API.Collect>[] = [
    {
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '学号',
      dataIndex: 'studentID',
    },
    {
      title: '课程编号',
      dataIndex: 'courseID',
      search: false,
    },
    {
      title: '开课学院',
      dataIndex: 'department',
    },
    {
      title: '成绩',
      dataIndex: 'score',
    },
    {
      title: '任课教师编号',
      dataIndex: 'teacherID',
    },
    {
      title: '学期',
      dataIndex: 'semester',
      valueEnum: {
        '0': {
          text: '2023-2024第一学期',
          status: 'success'
        },
        '1': {
          text: '2023-2024第二学期',
          status: 'failure'
        }
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            {key: 'copy', name: '复制'},
            {key: 'delete', name: '删除'},
          ]}
        />,
      ],
    },
  ];

  export default () => {
    const actionRef = useRef<ActionType>();
    return (
      <ProTable<API.Collect>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          console.log(sort, filter);
          await waitTime(2000);
          const {data:collectList} = await searchCollect();
          return {
            data: collectList,
          };
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          defaultValue: {
            option: {fixed: 'right', disable: true},
          },
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle="成绩统计信息管理"
        toolBarRender={() => [
        ]}
      />
    );
  };
