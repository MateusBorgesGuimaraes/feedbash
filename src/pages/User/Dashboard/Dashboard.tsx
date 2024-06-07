import React from "react";
import DashboardReports from "./DashboardReports/DashboardReports";
import DashboardHome from "./DashboardHome/DashboardHome";
import DashboardUsers from "./DashboardUsers/DashboardUsers";
import { Route, Routes } from "react-router-dom";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.dashboardLayout}>
      <div className={styles.dashboardHeader}>
        <AdminHeader />
      </div>
      <div className={styles.dashboardContent}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="reports" element={<DashboardReports />} />
          <Route path="users" element={<DashboardUsers />} />
        </Routes>
      </div>
    </section>
  );
};

export default Dashboard;
