import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=yamankatby&repo=react-native-material&type=star&count=true&size=large"
          width="126"
          height="30"
          style={{ marginBottom: 12 }}
          title="GitHub Stars"
        />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started">
            Get Started
          </Link>

          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: 12 }}
            target="_blank"
            href="https://snack.expo.dev/@yamankatby/react-native-material-explorer"
          >
            Expo Snack
          </Link>

          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: 12 }}
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.swazer.material"
          >
            Google Play
          </Link>

          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: 12 }}
            target="_blank"
            href="https://example.react-native-material.com/"
          >
            Web
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
