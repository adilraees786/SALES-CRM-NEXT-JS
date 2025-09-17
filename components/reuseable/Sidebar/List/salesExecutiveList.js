'use client'
import { useRouter } from "next/router";

import dashboard from '../../../../assets/SuperAdminSidebarIcons/dashboard.png';
import userRole from '../../../../assets/SuperAdminSidebarIcons/userRole.png';
import zonal from '../../../../assets/SuperAdminSidebarIcons/zonal.png';
import salesData from '../../../../assets/SuperAdminSidebarIcons/salesData.png';
import audit from '../../../../assets/SuperAdminSidebarIcons/audit.png';
import reports from '../../../../assets/SuperAdminSidebarIcons/reports.png';
import { usePathname } from "next/navigation";

export const salesExecutiveList = () => {
  const pathname = usePathname();

  const list = [
    {
      name: "Dashboard",
      url: "dashboard",
      Icon: dashboard,
      select:pathname === "/dashboard",
    },
    {
      name: "User & Role Management",
      url: "user-role-management",
      Icon: userRole,
      select:pathname === "/user-role-management",
    },
    {
      name: "Performance Tracking",
      url: "performance-tracking",
      Icon: zonal,
      select: pathname === "/performance-tracking",
    },
    {
      name: "Data Oversight",
      url: "data-oversight",
      Icon: salesData,
      select: pathname === "/data-oversight",
    },
    {
      name: "Accountability & Compliance",
      url: "accountability-compliance",
      Icon: audit,
      select: pathname === "/accountability-compliance",
    },
    {
      name: "Data Enter & Correction",
      url: "data-enter-corrections",
      Icon: reports,
      select: pathname === "/data-enter-corrections",
    },
    {
      name: "Notification Center",
      url: "notification-center",
      Icon: reports,
      select: pathname === "/notification-center",
    },
    {
      name: "Variance Analysis",
      url: "variance-analysis",
      Icon: reports,
      select: pathname === "/variance-analysis",
    },
  ];

  return list;
};
