import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar, SmallSidebar, BigSidebar } from "../../components"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { useAppContext } from "../../context/AppContext"

const SharedLayout = () => {
  const { user } = useAppContext()

  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}

export default SharedLayout
