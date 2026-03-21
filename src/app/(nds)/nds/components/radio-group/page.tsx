"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Example } from "../components/Example";

export default function RadioGroupPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Radio Group */}
      <Example
        code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </Example>

      {/* Horizontal Layout */}
      <Example
        code={`<RadioGroup defaultValue="comfortable" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="comfortable" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </Example>

      {/* With Descriptions */}
      <Example
        code={`<RadioGroup defaultValue="card" className="grid gap-4">
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="card" id="card" className="mt-1" />
    <div className="grid gap-1.5">
      <Label htmlFor="card">Card</Label>
      <p className="text-sm text-muted-foreground">
        Pay with your credit or debit card.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
    <div className="grid gap-1.5">
      <Label htmlFor="paypal">PayPal</Label>
      <p className="text-sm text-muted-foreground">
        Pay with your PayPal account.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="apple" id="apple" className="mt-1" />
    <div className="grid gap-1.5">
      <Label htmlFor="apple">Apple Pay</Label>
      <p className="text-sm text-muted-foreground">
        Pay with Apple Pay on supported devices.
      </p>
    </div>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="card" className="grid gap-4">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="card" id="card" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="card">Card</Label>
              <p className="text-muted-foreground text-sm">
                Pay with your credit or debit card.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="paypal">PayPal</Label>
              <p className="text-muted-foreground text-sm">
                Pay with your PayPal account.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="apple" id="apple" className="mt-1" />
            <div className="grid gap-1.5">
              <Label htmlFor="apple">Apple Pay</Label>
              <p className="text-muted-foreground text-sm">
                Pay with Apple Pay on supported devices.
              </p>
            </div>
          </div>
        </RadioGroup>
      </Example>

      {/* Disabled Options */}
      <Example
        code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="d1" />
    <Label htmlFor="d1">Available</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="d2" disabled />
    <Label htmlFor="d2" className="opacity-50">Disabled</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="d3" />
    <Label htmlFor="d3">Available</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="d1" />
            <Label htmlFor="d1">Available</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="d2" disabled />
            <Label htmlFor="d2" className="opacity-50">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="d3" />
            <Label htmlFor="d3">Available</Label>
          </div>
        </RadioGroup>
      </Example>
    </div>
  );
}
