"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Example } from "../components/Example";

export default function DialogPage() {
  const code = `<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Example>
    </div>
  );
}
