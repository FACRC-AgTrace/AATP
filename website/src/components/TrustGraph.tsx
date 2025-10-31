import React from "react";

// Extend JSX namespace to include custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "trust-graph": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src: string;
      };
    }
  }
}

interface TrustGraphProps {
  src: string;
}

export default function TrustGraph({ src }: TrustGraphProps) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <trust-graph src={src}></trust-graph>
    </div>
  );
}
