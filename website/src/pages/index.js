import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import React from 'react';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="home-hero">
      <div className="home-hero__container">
        <div className="home-hero__content">
          <h1 className="home-hero__title">{siteConfig.title}</h1>
          <p className="home-hero__description">{siteConfig.tagline}</p>
          <div className="home-hero__actions">
            <Link
              className="button button--primary button--lg"
              to={siteConfig.themeConfig.slackLink}>
              Join our chat channel
            </Link>
          </div>
        </div>
        <div className="home-hero__image-wrapper">
          <div className="home-hero__image">
            <iframe src="/animations/hero-animation.html" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Australian Agriculture Traceability Protocol"
      description="Supporting governments and industry on practical measures to counter greenwashing by implementing supply chain traceability and transparency at the scale needed to achieve meaningful impacts on global sustainability outcomes.">
      <main className="homepage-content">
        <HomepageHero />
        <div style={{height: '20px'}} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
