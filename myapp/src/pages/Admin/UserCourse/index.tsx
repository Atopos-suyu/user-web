import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { useRef } from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {API} from "@/services/ant-design-pro/typings";
import {searchCourse} from "@/services/ant-design-pro/api";
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

  const columns: ProColumns<API.Course>[] = [
    {
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '课程号',
      dataIndex: 'courseID',
    },
    {
      title: '课程名称',
      dataIndex: 'courseName',
      search: false,
    },
    {
      title: '学分',
      dataIndex: 'credits',
    },
    {
      title: '课程类型',
      dataIndex: 'courseType',
    },
    {
      title: '上课地点',
      dataIndex: 'location',
    },
    {
      title: '课程状态',
      dataIndex: 'courseStatus',
      valueEnum: {
        '0': {
          text: '活跃',
          status: 'success'
        },
        '1': {
          text: '已取消',
          status: 'failure'
        }
      }
    },
    {
      title: '编号',
      dataIndex: 'planetCode',
      search: false,
    },
    {
      dataIndex: 'userRole',
      title: '角色',
      align: 'center',
      search: false,
      renderFormItem: (_, {defaultRender}) => {
        return defaultRender(_);
      },
      render: record => (
        <Space>
          {record === 1 ? (
            <Tag color="#f50">管理员</Tag>
          ) : (
            <Tag color="#2db7f5">普通用户</Tag>
          )}{' '}
        </Space>
      )
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
      <ProTable<API.Course>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          console.log(sort, filter);
          await waitTime(2000);
          const {data:courseList} = await searchCourse();
          return {
            data: courseList,
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
        headerTitle="课程信息管理"
        toolBarRender={() => [
        ]}
      />
    );
  };
