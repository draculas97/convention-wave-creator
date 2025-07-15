import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Agenda from "./pages/Agenda";
import Speakers from "./pages/Speakers";
import Venue from "./pages/Venue";
import Sponsors from "./pages/Sponsors";
import Exhibitors from "./pages/Exhibitors";
import ChennaiExperience from "./pages/ChennaiExperience";
import Register from "./pages/Register";
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
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/chennai" element={<ChennaiExperience />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
