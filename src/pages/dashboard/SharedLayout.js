import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
import { useEffect,useState } from "react";

export default function SharedLayout() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
  });
  return (
    <Wrapper>
      <main className="dashboard">
        {screenWidth > 576 ? <BigSidebar /> : <SmallSidebar />}

        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
