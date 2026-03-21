import { Button, type ButtonProps } from "@/components/ui/button";

export function IconButton({
  variant = "plain",
  children,
  ...props
}: ButtonProps) {
  return <Button variant={variant} {...props} icon={children} />;
}
