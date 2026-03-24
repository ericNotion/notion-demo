"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Example } from "../components/Example";

export default function SonnerPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Toast */}
      <Example
        code={`import { toast } from "sonner"

<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`}
      >
        <Button onClick={() => toast("Event has been created")}>
          Show Toast
        </Button>
      </Example>

      {/* Toast with Title and Description */}
      <Example
        code={`toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
})`}
      >
        <Button
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          With Description
        </Button>
      </Example>

      {/* Success Toast */}
      <Example code={`toast.success("Successfully saved!")`}>
        <Button onClick={() => toast.success("Successfully saved!")}>
          Success Toast
        </Button>
      </Example>

      {/* Error Toast */}
      <Example code={`toast.error("Something went wrong!")`}>
        <Button
          variant="destructive"
          onClick={() => toast.error("Something went wrong!")}
        >
          Error Toast
        </Button>
      </Example>

      {/* Warning Toast */}
      <Example code={`toast.warning("Please review your input")`}>
        <Button
          variant="outline"
          onClick={() => toast.warning("Please review your input")}
        >
          Warning Toast
        </Button>
      </Example>

      {/* Info Toast */}
      <Example code={`toast.info("Did you know?")`}>
        <Button variant="outline" onClick={() => toast.info("Did you know?")}>
          Info Toast
        </Button>
      </Example>

      {/* Loading Toast */}
      <Example
        code={`const toastId = toast.loading("Loading...")
// Later:
toast.dismiss(toastId)`}
      >
        <Button
          variant="outline"
          onClick={() => {
            const id = toast.loading("Loading...");
            setTimeout(() => {
              toast.success("Done!", { id });
            }, 2000);
          }}
        >
          Loading Toast
        </Button>
      </Example>

      {/* Toast with Action */}
      <Example
        code={`toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`}
      >
        <Button
          onClick={() =>
            toast("Event has been created", {
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          With Action
        </Button>
      </Example>

      {/* Promise Toast */}
      <Example
        code={`toast.promise(
  new Promise((resolve) => setTimeout(resolve, 2000)),
  {
    loading: "Loading...",
    success: "Data loaded successfully!",
    error: "Error loading data",
  }
)`}
      >
        <Button
          onClick={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: "Loading...",
              success: "Data loaded successfully!",
              error: "Error loading data",
            })
          }
        >
          Promise Toast
        </Button>
      </Example>

      {/* Custom Duration */}
      <Example
        code={`toast("This will stay for 10 seconds", {
  duration: 10000,
})`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast("This will stay for 10 seconds", {
              duration: 10000,
            })
          }
        >
          Long Duration
        </Button>
      </Example>
    </div>
  );
}
