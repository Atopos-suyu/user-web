import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            高校课程信息管理系统概览
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            高校课程管理系统是现代高校教务管理的重要工具，它通过集成化、自动化的管理方式，提高了课程管理的效率和质量，推动了教育管理的现代化进程。随着信息技术的不断发展，高校课程管理系统将不断完善和升级，为高校提供更加高效、便捷的教务管理服务。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://zhuanlan.zhihu.com/p/32779156"
              title="课程管理"
              desc="课程设置：支持课程的开设、调整、撤销等操作。
课程大纲与计划：教师可以发布课程大纲、教学计划及每堂课的教学内容。
课程资源：存储、共享和发布课件、教案、习题等教学材料。"
            />
            <InfoCard
              index={2}
              title="教师管理"
              href="https://baike.baidu.com/item/%E5%B7%A5%E8%89%BA%E6%B5%81%E7%A8%8B/9173328"
              desc="教师分配：根据课程需求合理分配教师资源。
教学进度管理：帮助教师管理课程表、排课、考勤等。
作业与成绩管理：布置作业、批改作业、公布学生成绩。"
            />
            <InfoCard
              index={3}
              title="学生管理"
              href="https://wenku.baidu.com/view/ce5b0263874769eae009581b6bd97f192279bfa9.html?_wkts_=1715765875282"
              desc="选课管理：支持学生在线选课、查看课程信息。
学籍管理：管理学生个人信息、学籍变动、注册情况等。
成绩查询：学生可查询自己的课程成绩和学习情况。
"
            />
            <InfoCard
              index={4}
              title="成绩统计管理"
              href="https://wenku.baidu.com/view/ce5b0263874769eae009581b6bd97f192279bfa9.html?_wkts_=1715765875282"
              desc="根据学生的学习情况和成绩信息进行统计和分析。"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
