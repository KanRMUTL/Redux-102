import { TOGGLE_SIDEBAR, CLOSED_SIDEBAR, OPEN_SIDEBAR } from "./type";
import { Sidebar } from "../reducer/sidebarReducer";

const toggleSidebar = (payload: Sidebar) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload,
  };
};

const openSidebar = (payload: Sidebar) => {
  return {
    type: OPEN_SIDEBAR,
    payload,
  };
};

const closedSidebar = (payload: Sidebar) => {
  return {
    type: CLOSED_SIDEBAR,
    payload,
  };
};

const sidebarAction = {
  toggleSidebar,
  openSidebar,
  closedSidebar,
};

export default sidebarAction;
