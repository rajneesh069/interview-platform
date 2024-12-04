import { Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import VideoComponent from "./VideoComponent";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#1A1D24] text-white p-6 md:p-16">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-semibold">Trainee Interview</h1>
          <div className="flex gap-3">
            <Badge
              variant="outline"
              className="bg-[#2A2D35] text-white border-none py-2 px-3"
            >
              <Building2 className="w-4 h-4 mr-1" />
              Zeko
            </Badge>
            <Badge
              variant="outline"
              className="bg-[#2A2D35] text-white border-none py-2 px-3"
            >
              <Clock className="w-4 h-4 mr-1" />
              26 Minutes
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <VideoComponent />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Instructions</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-200">
              <li>
                Ensure stable internet and choose a clean, quiet location.
              </li>
              <li>
                Permission for access of camera, microphone, entire screen
                sharing is required.
              </li>
              <li>Be in professional attire and avoid distractions.</li>
              <li>
                Give a detailed response, providing as much information as you
                can.
              </li>
              <li>
                Answer the question with examples and projects you&apos;ve
                worked on.
              </li>
            </ol>

            <div className="bg-[#2A2D35] p-4 rounded-lg">
              <p className="text-gray-200">
                <span className="text-blue-400 hover:underline cursor-pointer">
                  Click here
                </span>{" "}
                to try a mock interview with Avya, our AI interviewer, and build
                your confidence before the main interview!
              </p>
            </div>

            <Button
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-6 text-lg"
              size="lg"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
