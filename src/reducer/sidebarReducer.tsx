import { TOGGLE_SIDEBAR, CLOSED_SIDEBAR, OPEN_SIDEBAR } from "../action/type";
export interface Sidebar {
  open: boolean;
}

export interface SidebarAction {
  type: string;
  payload: Sidebar;
}

const initialSidebar: Sidebar = {
  open: false,
};

export const sidebarReducer = (
  state: Sidebar = initialSidebar,
  action: SidebarAction
) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      state.open = !state.open;
      return state;
    case CLOSED_SIDEBAR:
      state.open = false;
      return state;
    case OPEN_SIDEBAR:
      state.open = true;
      return state;
    default:
      return state;
  }
};
