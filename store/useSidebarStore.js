import { create } from "zustand";

const SidebarStore = (set, get) => ({
    open: true,

    setOpen: (payload) =>
    {
        set({ open: payload });
    },

});


const useSidebarStore = create(SidebarStore);


export default useSidebarStore;