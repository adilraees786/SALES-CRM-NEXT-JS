'use client';
import { usePathname } from 'next/navigation';
import dashboard from '../../../../assets/SuperAdminSidebarIcons/dashboard.png';
import userRole from '../../../../assets/SuperAdminSidebarIcons/userRole.png';
import zonal from '../../../../assets/SuperAdminSidebarIcons/zonal.png';
import salesData from '../../../../assets/SuperAdminSidebarIcons/salesData.png';
import products from '../../../../assets/SuperAdminSidebarIcons/products.png';
import outlets from '../../../../assets/SuperAdminSidebarIcons/outlets.png';
import region from '../../../../assets/SuperAdminSidebarIcons/region.png';
import audit from '../../../../assets/SuperAdminSidebarIcons/audit.png';
import system from '../../../../assets/SuperAdminSidebarIcons/system.png';
import reports from '../../../../assets/SuperAdminSidebarIcons/reports.png';
import notification from '../../../../assets/SuperAdminSidebarIcons/notification.png';

export const SuperadminList = () =>
{
    const pathname = usePathname();

    const list = [
        {
            name: 'Dashboard',
            url: '/superadmin/dashboard',
            Icon: dashboard,
            select: pathname === '/dashboard',
        },
        {
            name: 'User & Role Management',
            url: '/superadmin/user-role-management',
            Icon: userRole,
            select: pathname === '/user-role-management',
        },
        {
            name: 'Zonal / SR Performance',
            url: '/superadmin/zonal-sr-performance',
            Icon: zonal,
            select: pathname === '/zonal-sr-performance',
        },
        {
            name: 'Sales Data Review',
            url: '/superadmin/sales-data-review',
            Icon: salesData,
            select: pathname === '/sales-data-review',
        },
        {
            name: 'Products',
            url: '/superadmin/products',
            Icon: products,
            select: pathname === '/products',
        },
        {
            name: 'Outlets',
            url: '/superadmin/outlets',
            Icon: outlets,
            select: pathname === '/outlets',
        },
        {
            name: 'Region / Area Management',
            url: '/superadmin/region-area-management',
            Icon: region,
            select: pathname === '/region-area-management',
        },
        {
            name: 'Audit & Compliance',
            url: '/superadmin/audit-compliance',
            Icon: audit,
            select: pathname === '/audit-compliance',
        },
        {
            name: 'System Config',
            url: '/superadmin/system-config',
            Icon: system,
            select: pathname === '/system-config',
        },
        {
            name: 'Advanced Reports',
            url: '/superadmin/advanced-reports',
            Icon: reports,
            select: pathname === '/advanced-reports',
        },
        {
            name: 'Notification Center',
            url: '/superadmin/notification-center',
            Icon: notification,
            select: pathname === '/notification-center',
        },
    ];

    return list;
};

// 'use client';

// import { usePathname } from 'next/navigation';
// import dashboard from '../../../../assets/SuperAdminSidebarIcons/Dashboard.png';
// import userRole from '../../../../assets/SuperAdminSidebarIcons/userRole.png';
// import zonal from '../../../../assets/SuperAdminSidebarIcons/zonal.png';
// import salesData from '../../../../assets/SuperAdminSidebarIcons/salesData.png';
// import products from '../../../../assets/SuperAdminSidebarIcons/products.png';
// import outlets from '../../../../assets/SuperAdminSidebarIcons/outlets.png';
// import region from '../../../../assets/SuperAdminSidebarIcons/region.png';
// import audit from '../../../../assets/SuperAdminSidebarIcons/audit.png';
// import system from '../../../../assets/SuperAdminSidebarIcons/system.png';
// import reports from '../../../../assets/SuperAdminSidebarIcons/reports.png';
// import notification from '../../../../assets/SuperAdminSidebarIcons/notification.png';

// export const SuperadminList = () => {
//   const pathname = usePathname();

//   const list = [
//     {
//       name: 'Dashboard',
//       url: '/superadmin/dashboard',
//       Icon: dashboard,
//       select: pathname === '/superadmin/dashboard',
//     },
//     {
//       name: 'User & Role Management',
//       url: '/superadmin/user-role-management',
//       Icon: userRole,
//       select: pathname === '/superadmin/user-role-management',
//     },
//     {
//       name: 'Zonal / SR Performance',
//       url: '/superadmin/zonal-sr-performance',
//       Icon: zonal,
//       select: pathname === '/superadmin/zonal-sr-performance',
//     },
//     {
//       name: 'Sales Data Review',
//       url: '/superadmin/sales-data-review',
//       Icon: salesData,
//       select: pathname === '/superadmin/sales-data-review',
//     },
//     {
//       name: 'Products',
//       url: '/superadmin/products',
//       Icon: products,
//       select: pathname === '/superadmin/products',
//     },
//     {
//       name: 'Outlets',
//       url: '/superadmin/outlets',
//       Icon: outlets,
//       select: pathname === '/superadmin/outlets',
//     },
//     {
//       name: 'Region / Area Management',
//       url: '/superadmin/region-area-management',
//       Icon: region,
//       select: pathname === '/superadmin/region-area-management',
//     },
//     {
//       name: 'Audit & Compliance',
//       url: '/superadmin/audit-compliance',
//       Icon: audit,
//       select: pathname === '/superadmin/audit-compliance',
//     },
//     {
//       name: 'System Config',
//       url: '/superadmin/system-config',
//       Icon: system,
//       select: pathname === '/superadmin/system-config',
//     },
//     {
//       name: 'Advanced Reports',
//       url: '/superadmin/advanced-reports',
//       Icon: reports,
//       select: pathname === '/superadmin/advanced-reports',
//     },
//     {
//       name: 'Notification Center',
//       url: '/superadmin/notification-center',
//       Icon: notification,
//       select: pathname === '/superadmin/notification-center',
//     },
//   ];

//   return list;
// };
