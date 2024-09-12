import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {SYSTEM_LINK} from "@/constant";

const Footer: React.FC = () => {
  const defaultMessage = "天一出品";
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'planet',
          title: '高校课程管理',
          href: SYSTEM_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 天一 GitHub </>,
          href: 'https://github.com/Atopos-suyu',
          blankTarget: true,
        },
        {
          key: 'project',
          title: '课程信息',
          href: 'https://apps.youkeda.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
