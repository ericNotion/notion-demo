export type ToolName = "github" | "slack" | "websearch" | "stripe";

export interface ToolsState {
  github: boolean;
  slack: boolean;
  websearch: boolean;
  stripe: boolean;
}
export type ContextChipType = "person" | "page" | "connection";

type ContextChipBaseIconProps = {
  size?: number;
  className?: string;
};

export type ContextChipAvatarIconProps = ContextChipBaseIconProps & {
  src: string;
  fallback: string;
};

export type ContextChipOtherIconProps = ContextChipBaseIconProps;

export interface ContextChipItem {
  id: string;
  type: ContextChipType;
  name: string;
  iconType: string;
  iconProps: ContextChipAvatarIconProps | ContextChipOtherIconProps;
}

export interface ContextChipState {
  selected: ContextChipItem[];
}
