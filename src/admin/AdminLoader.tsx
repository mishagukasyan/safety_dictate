import React from "react";
import { useParams, Navigate } from "react-router-dom";

export const AdminLoader = () => {
  const { adminToken } = useParams();

  const expectedAdminToken = "exampleToken";
  const adminTokenIsValid = adminToken === expectedAdminToken;

  if (!adminTokenIsValid) {
    // Если токен не действителен, перенаправляем на главную страницу или выводим сообщение об ошибке
    return <Navigate to="/main" />;
  }

  // Импортируйте и возвращайте реальную админ-панель здесь
  const AdminDashboard = React.lazy(() =>
    import("./AdminDashboard" /* webpackChunkName: "AdminDashboard" */).then(
      (module) => ({ default: module.AdminDashboard })
    )
  );

  return <AdminDashboard />;
};
