export const openProfile = ({ hyperlink }: { hyperlink: string }) => {
  window.open(hyperlink, "_blank", "noopener,noreferrer");
}
