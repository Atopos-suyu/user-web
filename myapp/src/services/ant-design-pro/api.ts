// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';
import {API} from "@/services/ant-design-pro/typings";

/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 GET /api/user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 GET /api/user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 GET /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterResult>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索用户 GET /api/user/search */
export async function searchUsers(params?: API.CurrentUser, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('/api/user/search?username=' + params?.username, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    data:{
      method: 'update',
      ...(options || {}),
    }
  });
}

/** 新建规则 GET /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'GET',
    data:{
      method: 'GET',
      ...(options || {}),
    }
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'GET',
    data:{
      method: 'delete',
      ...(options || {}),
    }
  });
}

/** 搜索课程 GET /api/course/search */
export async function searchCourse(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.Course[]>>('/api/course/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 搜索教师 GET /api/teacher/search */
export async function searchTeacher(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.Teacher[]>>('/api/teacher/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 搜索学生 GET /api/student/search */
export async function searchStudent(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.Student[]>>('/api/student/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 搜索成绩统计 GET /api/collect/search */
export async function searchCollect(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.Collect[]>>('/api/collect/search', {
    method: 'GET',
    ...(options || {}),
  });
}


