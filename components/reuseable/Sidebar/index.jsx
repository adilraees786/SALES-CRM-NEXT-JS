
'use client';
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "@/redux/sidebar";
import { SuperadminList } from "./List/superadminList";
import { useUser } from "@/context/userContext";
 import { salesExecutiveList } from "./List/salesExecutiveList";
import ListSection from "./ListSection";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import  { SalesRepresentativeList } from "./List/SalesRepresentativeList";


const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state?.sidebarValue);
  const sidebarRef = useRef();
  const { user, setUser } = useUser();
  const role = Cookies.get('role')
  

  // Get list to show based on role
  const gettingSideList = () => {

    if (role === 'superadmin') return SuperadminList();
    if (role === 'sale-representative') return SalesRepresentativeList();
        if (role === 'sale-executive') return salesExecutiveList();

  };

  const handleLogout = () => {
    Cookies.remove('role'); 
     router.push('/login');
  };

  const handleNavigate = (item) => {
    if (item?.role) {
      setUser(item?.roleName);
      router.push(`/dashboard`);
    } else {
      router.push(`/${item?.url}`); 
    }
  };

  const handleOutsideClick = (event) => {
    if (window?.innerWidth < 1200) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dispatch(setOpen(false));
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      dispatch(setOpen(window.innerWidth > 1200));
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch]);

  return (
    <div className={`flex ${open ? "z-9" : ""}`}>
      <ListSection
        open={open}
        sidebarRef={sidebarRef}
        list={gettingSideList()}
        handleLogout={handleLogout}
        handleNavigate={handleNavigate}
      />
    </div>
  );
};

export default Sidebar;
