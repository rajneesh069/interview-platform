import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import AuthComponent from "./AuthComponent";
import CheckMediaPermissions from "./CheckMediaPermissions";
import StartInterview from "./StartInterview";

export default async function TestStart() {
  const session = await auth();
  if (!session?.user?.email) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-200">
          <li>Ensure stable internet and choose a clean, quiet location.</li>
          <li>
            Permission for access of camera, microphone, entire screen sharing
            is required.
          </li>
          <li>Be in professional attire and avoid distractions.</li>
          <li>
            Give a detailed response, providing as much information as you can.
          </li>
          <li>
            Answer the question with examples and projects you&apos;ve worked
            on.
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
        <AuthComponent>
          <Button
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-6 text-lg"
            size="lg"
          >
            Start Now
          </Button>
        </AuthComponent>
      </div>
    );
  }

  if (session.user.email) {
    return (
      <div className="flex flex-col gap-5 text-green">
        <div>
          <h2 className="text-xl font-semibold">Ready to join?</h2>
          <p>Please make sure that your device is properly configured.</p>
        </div>

        <div>
          <CheckMediaPermissions />
        </div>

          <StartInterview />
      </div>
    );
  }

  return <></>;
}
