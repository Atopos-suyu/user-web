export default [
  { path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/user-manage', name: '用户管理页', component: './Admin/UserManage' },
      { path: '/admin/user-course', name: '课程管理页', component: './Admin/UserCourse' },
      { path: '/admin/user-teacher', name: '教师管理页', component: './Admin/UserTeacher' },
      { path: '/admin/user-student', name: '学生管理页', component: './Admin/UserStudent' },
      { path: '/admin/user-collect', name: '成绩统计页', component: './Admin/UserCollect' },
    ],
  },
  { name: '选修课程预览介绍', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
