import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Architecture from "./pages/Architecture";
import CloudComputing from "./pages/CloudComputing";
import Virtualization from "./pages/Virtualization";
import DevOps from "./pages/DevOps";
import CICDPipeline from "./pages/CICDPipeline";
import Security from "./pages/Security";
import Monitoring from "./pages/Monitoring";
import Scalability from "./pages/Scalability";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/virtualization" element={<Virtualization />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/cicd" element={<CICDPipeline />} />
          <Route path="/security" element={<Security />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/scalability" element={<Scalability />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
