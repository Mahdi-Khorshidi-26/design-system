import { memo } from "react";

function ContentCopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M17 1H7c-1.1 0-2 .9-2 2v14h2V3h10V1zm3 4H9c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 14H10V8h9v11z" />
    </svg>
  );
}

export default memo(ContentCopyIcon);
