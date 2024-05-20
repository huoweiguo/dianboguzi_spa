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
    return http.post(`/api/web/news/newsInfo`, { ...data }, config);
  };
  const getNewsList = (data: NewsList, config: any) => {
    return http.post(`/api/web/news/newslist`, { ...data }, config);
  };

  return {
    getNewsInfo,
    getNewsList,
  };
});
