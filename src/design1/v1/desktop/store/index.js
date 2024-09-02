import { Store } from "@common/utils/createStore";

const initialState = {
  isHeaderTransparent: false,
  // design1 v1 특정 초기 상태
};

export const appStore = new Store(initialState);
