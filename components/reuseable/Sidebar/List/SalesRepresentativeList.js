

'use client'
import { usePathname } from "next/navigation";
import dashboard from '../../../../assets/SuperAdminSidebarIcons/dashboard.png';

export const SalesRepresentativeList = () => {
  const pathname = usePathname();

  const list = [
    {
      name: "Dashboard",
      url: "dashboard",
      Icon: dashboard,
      select: pathname === "/dashboard",
    },
  ];

  return list;
};
