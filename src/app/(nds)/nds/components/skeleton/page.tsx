"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Example } from "../components/Example";

export default function SkeletonPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Skeleton */}
      <Example code={`<Skeleton className="h-4 w-[250px]" />`}>
        <Skeleton className="h-4 w-[250px]" />
      </Example>

      {/* Card Skeleton */}
      <Example
        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Example>

      {/* Text Block Skeleton */}
      <Example
        code={`<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
</div>`}
      >
        <div className="w-full max-w-md space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </Example>

      {/* Image Skeleton */}
      <Example code={`<Skeleton className="h-[200px] w-[300px] rounded-xl" />`}>
        <Skeleton className="h-[200px] w-[300px] rounded-xl" />
      </Example>

      {/* Form Skeleton */}
      <Example
        code={`<div className="space-y-4 w-full max-w-sm">
  <div className="space-y-2">
    <Skeleton className="h-4 w-20" />
    <Skeleton className="h-10 w-full" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="h-10 w-full" />
  </div>
  <Skeleton className="h-10 w-full" />
</div>`}
      >
        <div className="w-full max-w-sm space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </Example>
    </div>
  );
}
