import http from "@/utlis/http";

export const GetList = (data) => {
  return http.post("/admin/login", data);
};

export const GetCategory = (params) => {
  return http.post(`/admin/getinfo?token=${params}`, params);
};

export const GetStat = () => {
  return http({ url: "/admin/statistics1", method: "GET" });
};
