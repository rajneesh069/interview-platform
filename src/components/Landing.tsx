import { Clock, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import VideoComponent from "./VideoComponent";
import TestStart from "./TestStart";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#1A1D24] text-white p-6 md:p-16">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-semibold">Trainee Interview</h1>
          <div className="flex gap-3">
            <Badge
              variant="outline"
              className="bg-[#2A2D35] text-white border-white bg-none py-2 px-3"
            >
              <Home className="w-4 h-4 mr-1" color="orange" />
              Zeko
            </Badge>
            <Badge
              variant="outline"
              className="bg-[#2A2D35] text-white border-white py-2 px-3"
            >
              <Clock className="w-4 h-4 mr-1" color="red" />
              26 Minutes
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <VideoComponent />
          </div>

          <div>
            <TestStart />
          </div>
        </div>
      </div>
    </div>
  );
}
