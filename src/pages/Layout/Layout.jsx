import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Header from "./Header";
import HelloWorld from "../HelloWorld";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/helloworld" element={<HelloWorld />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}