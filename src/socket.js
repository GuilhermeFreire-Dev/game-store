import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === "production" ? undefined : process.env.REACT_APP_API_URL;

export const socket = io(URL, {
  autoConnect: false
});