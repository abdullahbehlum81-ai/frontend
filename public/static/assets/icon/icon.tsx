import { BaseIcon, IconProps } from "./BaseIcon";

function DeleteIcon({ fill = "#ef4444", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 5.25H15.786C15.693 5.068 15.621 4.862 15.544 4.632L15.342 4.02499C15.138 3.41299 14.565 3 13.919 3H10.081C9.43499 3 8.862 3.41299 8.658 4.02499L8.45599 4.632C8.37899 4.862 8.307 5.068 8.214 5.25H4C3.586 5.25 3.25 5.586 3.25 6C3.25 6.414 3.586 6.75 4 6.75H20C20.414 6.75 20.75 6.414 20.75 6C20.75 5.586 20.414 5.25 20 5.25Z"
        fill={fill}
      />
      <path
        d="M14 16.75C13.586 16.75 13.25 16.414 13.25 16V11C13.25 10.586 13.586 10.25 14 10.25C14.414 10.25 14.75 10.586 14.75 11V16C14.75 16.414 14.414 16.75 14 16.75Z"
        fill={fill}
      />
      <path
        d="M10 16.75C9.586 16.75 9.25 16.414 9.25 16V11C9.25 10.586 9.586 10.25 10 10.25C10.414 10.25 10.75 10.586 10.75 11V16C10.75 16.414 10.414 16.75 10 16.75Z"
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M18.95 6.75L18.19 18.2C18.08 19.78 17.25 21 15.19 21H8.81004C6.75004 21 5.92004 19.78 5.81004 18.2L5.05005 6.75H18.95Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

// ✏️ UpdateIcon
function UpdateIcon({ fill = "#0ea5e9", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M16 21.75H6C3.582 21.75 2.25 20.418 2.25 18V8C2.25 5.582..."
        fill={fill}
      />
      <path
        d="M20.5701 7.07996L18.6801 8.95997L15.04 5.31998L16.92 3.42997..."
        fill={fill}
      />
      <path
        opacity="0.4"
        d="M18.68 8.95999L11.61 16H8V12.39L15.04 5.32001L18.68 8.95999Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

// 👁 EyeOpenIcon
function EyeOpenIcon({ color = "#000", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path
        fill="#000"
        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
      ></path>
    </BaseIcon>
  );
}

// 👁‍🗨 EyeCloseIcon
function EyeCloseIcon({ color = "#000", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l3.035-3.035C8.883 18.103 10.392 18.5 12 18.5c2.618 0 4.972-1.051 6.668-2.353c.85-.652 1.547-1.376 2.035-2.08c.48-.692.797-1.418.797-2.067s-.317-1.375-.797-2.066c-.488-.705-1.185-1.429-2.035-2.08q-.406-.313-.86-.601zm-5.4 5.402l-1.1 1.098a2.25 2.25 0 0 1-3 3l-1.1 1.1a3.75 3.75 0 0 0 5.197-5.197"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M12.67 8.31a.26.26 0 0 0 .23-.07l1.95-1.95a.243.243 0 0 0-.104-.407A10.2 10.2 0 0 0 12 5.5c-2.618 0-4.972 1.051-6.668 2.353c-.85.652-1.547 1.376-2.036 2.08c-.48.692-.796 1.418-.796 2.067s.317 1.375.796 2.066a9.3 9.3 0 0 0 1.672 1.79a.246.246 0 0 0 .332-.017l2.94-2.94a.26.26 0 0 0 .07-.23q-.06-.325-.06-.669a3.75 3.75 0 0 1 4.42-3.69"
      ></path>
    </BaseIcon>
  );
}

// ➕ PlusIcon
function PlusIcon({ fill = "#fff", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <rect width="22" height="22" fill="none" />
      <path fill={fill} d="M17 13h-4v4h-2v-4H7v-2h4V7..." />
    </BaseIcon>
  );
}

// 📋 ListViewIcon
function ListViewIcon({ stroke = "#000", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="2"
        d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
      />
    </BaseIcon>
  );
}

// 🔲 GridViewIcon
function GridViewIcon({ fill = "#000", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" {...props}>
      <path fill={fill} d="M5 11q-.825 0-1.412-.587T3 9V5..." />
    </BaseIcon>
  );
}

// ⚪ IndicatorIcon
function IndicatorIcon({ fill = "#000", ...props }: IconProps) {
  return (
    <BaseIcon viewBox="0 0 16 16" {...props}>
      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5..." fill={fill} />
      <path d="M16 3a3 3 0 1 1-6 0a3 3 0..." fill={fill} />
    </BaseIcon>
  );
}

// Close Icon
function CloseIcon({ ...props }) {
  return (
    <BaseIcon
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </BaseIcon>
  );
}



export {
  DeleteIcon,
  UpdateIcon,
  EyeOpenIcon,
  EyeCloseIcon,
  PlusIcon,
  ListViewIcon,
  GridViewIcon,
  IndicatorIcon,
  CloseIcon,
};
