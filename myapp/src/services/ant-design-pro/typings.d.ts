// @ts-ignore
/* eslint-disable */

import * as stream from "stream";

declare namespace API {
  type CurrentUser = {
    id:number;
    username:string;
    userAccount:string;
    avatarUrl:string;
    gender:string;
    phone:string;
    email:string;
    userState:number;
    userRole:number;
    planetCode:string;
    createTime:Date;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  /**
   * 统一返回类型
   */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description:string;
    username:string;
  }

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    planetCode?: string;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type Course = {
    id:string;
    courseID:string;
    courseName:string;
    credits:number;
    courseType:string;
    location:string;
    courseState:number;
    userRole:number;
    planetCode:string;
    createTime:Date;
  }
  type Teacher = {
    id:string;
    teacherID:string;
    name:string;
    gender:string;
    title:string;
    phoneNumber:string;
    userRole:number;
    createTime:Date;
    updateTime:Date;
  }
  type Student = {
    id:string;
    studentID:string;
    studentName:string;
    gender:string;
    department:string;
    grade:string;
    major:string;
    studentClass:string;
    createTime:Date;
    updateTime:Date;
  }
  type Collect = {
    id:string;
    studentID:string;
    courseID:string;
    semester:string;
    score:string;
    teacherID:string;
    department:string;
    createTime:Date;
    updateTime:Date;
  }
}
