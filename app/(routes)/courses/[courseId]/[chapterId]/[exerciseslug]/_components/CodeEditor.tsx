import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { CourseExercise } from "../page";

import { Split } from "lucide-react";
import SplitterLayout from "react-splitter-layout";
import { Button } from "@/components/ui/button";
import { useSandpack } from "@codesandbox/sandpack-react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

const CodeEditorChildren = ({ onCompleteExercise }: any) => {
  const { sandpack } = useSandpack();

  return (
    <div className="font-game absolute bottom-40 flex gap-5 right-5">
      <Button
        variant={"pixel"}
        size={"lg"}
        className="text-xl"
        onClick={() => sandpack.runSandpack()}
      >
        Run Code
      </Button>
      <Button
        onClick={() => onCompleteExercise()}
        variant={"pixel"}
        size={"lg"}
        className="bg-[#a3e534] text-xl"
      >
        Mark Completed
      </Button>
    </div>
  );
};
const CodeEditor = ({ courseExerciseData, loading }: Props) => {
  const { exerciseslug } = useParams();

  const onCompleteExercise = async () => {
    const exerciseIndex = courseExerciseData?.exercises?.findIndex(
      (item) => item.slug == exerciseslug
    );

    if (exerciseIndex == undefined) {
      return;
    }
    const result = await axios.post("/api/exercise/complete", {
      courseId: courseExerciseData?.courseId,
      chapterId: courseExerciseData?.chapterId,
      exerciseId: exerciseIndex + 1,
      xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
    });
    toast.success("Exercise Completed");
  };
  return (
    <div>
      <SandpackProvider
        template="static"
        theme={"dark"}
        style={{
          height: "100vh",
        }}
        files={courseExerciseData?.exerciseData?.exercisesContent?.starterCode}
        options={{
          autorun: false,
          autoReload: false,
        }}
      >
        <SandpackLayout
          style={{
            height: "100vh",
          }}
        >
          <SplitterLayout
            percentage
            primaryMinSize={30}
            secondaryInitialSize={70}
          >
            <SandpackPreview
              showNavigator
              showOpenInCodeSandbox={false}
              showOpenNewtab
              style={{
                height: "100vh",
              }}
            />

            <div className="relative h-full">
              <SandpackCodeEditor
                showTabs
                style={{
                  height: "100vh",
                }}
              />
              <CodeEditorChildren onCompleteExercise={onCompleteExercise} />
            </div>
          </SplitterLayout>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default CodeEditor;
