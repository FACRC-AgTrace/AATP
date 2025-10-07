import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

/**
 * A reusable component for UNTP specification links
 * @param {Object} props
 * @param {string} props.spec - The specification name (e.g., 'DigitalProductPassport')
 * @param {string} props.children - The link text
 * @param {string} props.className - Optional CSS class
 */
export default function UntpLink({spec, children, className}) {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.themeConfig.globalVariables.untpBaseUrl;
  const url = `${baseUrl}/docs/specification/${spec}`;

  return (
    <a
      href={url}
      className={className}
      target="_blank"
      rel="noopener noreferrer">
      {children || spec}
    </a>
  );
}
