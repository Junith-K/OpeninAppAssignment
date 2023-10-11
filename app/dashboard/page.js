'use client'

import { useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import { useEffect } from 'react';

import BarChart from '@/components/BarChart';
import BottomCards from '@/components/BottomCards';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const Dashboard = () => {
    const session = useSession();

    useEffect(() => {
        if (session.status == "unauthenticated") {
            redirect("/");
        }
    }, [session.status])

    return (
        session.status === "authenticated" ? (
          <div id="dashboardContainer" className="flex p-[1%] bg-[#f5f5f5] min-h-screen box-border">
            <div id="dashboardLeft" className="w-[300px]">
              <Sidebar />
            </div>
            <div id="dashboardRight" className="flex-[3] mx-[2rem]">
              <Navbar />
              <Card />
              <BarChart />
              <BottomCards />
            </div>
          </div>
        ) : (
          redirect('/')
        )
      );
      
};

export default Dashboard;