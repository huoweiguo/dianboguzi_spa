import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import http from "@/utils/https";

interface NewsInfo {
  id: string;
}
interface NewsList {
  id: string;
  pageNum: number;
  pageSize: number;
}

export const useNewsStore = defineStore("news", () => {
  const getNewsInfo = (data: NewsInfo, config: any) => {
    //文章详情
    return http.post(`/api/web/news/newsInfo`, { ...data }, config);
  };
  const getNewsList = (data: NewsList, config: any) => {
    //旧版本文章列表的接口
    return http.post(`/api/web/news/newslist`, { ...data }, config);
  };
  const getOfflineNewsList = (data: NewsList, config: any) => {
    //线下活动文章列表
    return http.post(`/api/web/news/offlineNewsList`, { ...data }, config);
  };

  const getOnlineNewsList = (data: NewsList, config: any) => {
    //线上活动文章列表
    return http.post(`/api/web/news/onlineNewsList`, { ...data }, config);
  };

  const getRecentNewsList = (data: NewsList, config: any) => {
    //最新文章列表
    return http.post(`/api/web/news/recentNewsList`, { ...data }, config);
  };

  const getSlideList = (data: NewsList, config: any) => {
    //轮播图列表
    return http.post(`/api/web/news/slideList`, { ...data }, config);
  };

  const getSlideListMobile = (data: NewsList, config: any) => {
    //轮播图列表
    return http.post(`/api/web/news/slideListMobile`, { ...data }, config);
  };

  const getZhaoPinInfo = (data: NewsInfo, config: any) => {
    //招聘详情
    return http.post(`/api/web/news/zhaopinInfo`, { ...data }, config);
  };

  const getZhaoPinList = (data: NewsList, config: any) => {
    //招聘文章列表
    return http.post(`/api/web/news/zhaopinList`, { ...data }, config);
  };

  return {
    getNewsInfo,
    getNewsList,
    getOfflineNewsList,
    getOnlineNewsList,
    getRecentNewsList,
    getSlideList,
    getSlideListMobile,
    getZhaoPinInfo,
    getZhaoPinList,
  };
});
