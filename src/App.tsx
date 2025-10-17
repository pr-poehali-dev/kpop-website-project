
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import History from "./pages/History";
import Agencies from "./pages/Agencies";
import Groups from "./pages/Groups";
import BTS from "./pages/BTS";
import Blackpink from "./pages/Blackpink";
import Fashion from "./pages/Fashion";
import Fandoms from "./pages/Fandoms";
import Industry from "./pages/Industry";
import Glossary from "./pages/Glossary";
import TopReleases from "./pages/TopReleases";
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
          <Route path="/history" element={<History />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/bts" element={<BTS />} />
          <Route path="/blackpink" element={<Blackpink />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fandoms" element={<Fandoms />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/top-releases" element={<TopReleases />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;