import React from "react";

import { TOGGLE_SIDEBAR, MYPOST_PAGE } from "./actions";

export default function reducer(state, action) {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  throw new Error(`no such action:${action.type}`);
}
