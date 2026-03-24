"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icon } from "@nds-icons";
import { checkmarkCircleIcon } from "@nds-icons/checkmarkCircle/default.icon";
import { exclamationMarkTriangleIcon } from "@nds-icons/exclamationMarkTriangle/default.icon";
import { infoCircleIcon } from "@nds-icons/infoCircle/default.icon";
import { xMarkCircleIcon } from "@nds-icons/xMarkCircle/default.icon";
import { Example } from "../components/Example";

export default function AlertPage() {
  return (
    <div className="flex flex-col">
      {/* Default Alert */}
      <Example
        code={`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-md">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </Example>

      {/* Alert with Icon */}
      <Example
        code={`<Alert>
  <Icon icon={infoCircleIcon} size={16} />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert message.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-md">
          <Icon icon={infoCircleIcon} size={16} />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational alert message.
          </AlertDescription>
        </Alert>
      </Example>

      {/* Destructive Alert */}
      <Example
        code={`<Alert variant="destructive">
  <Icon icon={xMarkCircleIcon} size={16} />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="destructive" className="max-w-md">
          <Icon icon={xMarkCircleIcon} size={16} />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </Example>

      {/* Warning Alert (custom styling) */}
      <Example
        code={`<Alert className="border-yellow-500/50 text-yellow-600 dark:text-yellow-500 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-500">
  <Icon icon={exclamationMarkTriangleIcon} size={16} />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your trial period is ending soon.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-md border-yellow-500/50 text-yellow-600 dark:text-yellow-500 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-500">
          <Icon icon={exclamationMarkTriangleIcon} size={16} />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Your trial period is ending soon.</AlertDescription>
        </Alert>
      </Example>

      {/* Success Alert (custom styling) */}
      <Example
        code={`<Alert className="border-green-500/50 text-green-600 dark:text-green-500 [&>svg]:text-green-600 dark:[&>svg]:text-green-500">
  <Icon icon={checkmarkCircleIcon} size={16} />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}
      >
        <Alert className="max-w-md border-green-500/50 text-green-600 dark:text-green-500 [&>svg]:text-green-600 dark:[&>svg]:text-green-500">
          <Icon icon={checkmarkCircleIcon} size={16} />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      </Example>
    </div>
  );
}
