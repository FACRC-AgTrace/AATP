import React from "react";

// Extend JSX namespace to include custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "credential-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src: string;
      };
    }
  }
}

interface CredentialViewerProps {
  src?: any;
}

export default function CredentialViewer({ src }: CredentialViewerProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <credential-viewer src={src}></credential-viewer>
    </div>
  );
}
