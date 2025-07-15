import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CreateRoom />} index path="/" />
        <Route element={<Room />} path="/room/:roomId" />
      </Routes>
    </BrowserRouter>
  );
}
