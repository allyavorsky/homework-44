import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ярослав",
  email: "student@example.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
