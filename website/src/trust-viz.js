if (typeof window !== 'undefined') {
  const moduleScript = document.createElement('script');
  moduleScript.type = 'module';
  moduleScript.textContent = `
  import { defineCustomElements } from "https://viz.truststack.dev/v0.0.2/loader/index.js?d=${Date.now()}";
  defineCustomElements();
`;
  document.head.appendChild(moduleScript);
}
