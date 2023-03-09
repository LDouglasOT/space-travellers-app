import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "./rockets/rocketsSlice";
import missionsSlice from "./mission/missionSlice";

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    mission: missionsSlice,
  },
});

export default store;
