import React, { useCallback, useEffect, useState } from "react";
import Head from "@docusaurus/core/lib/client/exports/Head";
import Link from "@docusaurus/core/lib/client/exports/Link";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import "../../static/output.css";

const Button = ({ to, primary, children }) => (
  <Link
    to={to}
    title={children}
    className={`px-2 py-1 rounded text-lg font-serif transition ${
      primary ? "bg-primary hover:bg-primary-variant text-on-primary" : "hover:bg-gray-100"
    }`}
  >
    {children}
  </Link>
);

const Nav = () => {
  const { siteConfig } = useDocusaurusContext();

  const [activeTab, setActiveTab] = useState(localStorage.getItem("docusaurus.tab.npm2yarn") ?? "npm");

  const [isMessageShown, setIsMessageShown] = useState(false);

  const changeActiveTab = useCallback((tab) => {
    navigator.clipboard
      .writeText(tab === "npm" ? "npm i @react-native-material/core" : "yarn add @react-native-material/core")
      .then(() => {
        setIsMessageShown(true);
        setTimeout(() => {
          setIsMessageShown(false);
        }, 3000);
      });

    localStorage.setItem("docusaurus.tab.npm2yarn", tab);
    setActiveTab(tab);
  }, []);

  return (
    <nav className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto flex flex-col">
      <div className="flex items-center justify-between">
        <Link className="text-2xl font-serif">@react-native-material</Link>
        <ul className="flex items-center">
          <li>
            <Button to="/blog">Blog</Button>
          </li>
          <li className="ml-10">
            <Button to="/templates">Templates</Button>
          </li>
          <li className="ml-10">
            <Button to={siteConfig.themeConfig.navbar.items.find((x) => x.label === "GitHub").href}>GitHub</Button>
          </li>
          <li className="ml-10">
            <Button to="/docs" primary>
              Get Started
            </Button>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex items-center">
        <button
          onClick={() => changeActiveTab("npm")}
          className={`h-[24px] px-2 flex justify-center items-center text-lg font-serif rounded-full transition ${
            activeTab === "npm"
              ? "bg-primary hover:bg-primary-variant text-on-primary"
              : "bg-gray-300 hover:bg-gray-400 text-white"
          }`}
        >
          npm
        </button>
        <button
          onClick={() => changeActiveTab("yarn")}
          className={`h-[24px] ml-4 px-2 flex justify-center items-center text-lg font-serif rounded-full transition ${
            activeTab === "yarn"
              ? "bg-primary hover:bg-primary-variant text-on-primary"
              : "bg-gray-300 hover:bg-gray-400 text-white"
          }`}
        >
          yarn
        </button>
        <code className="ml-4 text-lg font-serif">
          {activeTab === "npm" ? "npm i @react-native-material/core" : "yarn add @react-native-material/core"}
        </code>
      </div>
    </nav>
  );
};

const Footer = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto flex flex-col">
      <div className="h-0.5 bg-gray-100" />
      <Link to="/" title="React Native Material" className="mt-14 text-xl font-serif">
        @react-native-material
      </Link>
      <p className="mt-5 text-lg text-gray-500">
        Modular and customizable Material Design UI
        <br />
        components for React Native.
      </p>
      <div className="flex items-center justify-between mt-14 -mx-2">
        <ul className="flex">
          <li>
            <Button to="/blog">Blog</Button>
          </li>
          <li className="ml-6">
            <Button to="/templates">Templates</Button>
          </li>
          <li className="ml-6 text-primary">
            <Button to="/docs">Get Started</Button>
          </li>
        </ul>
        <ul className="flex">
          <li>
            <Button to={siteConfig.themeConfig.navbar.items.find((x) => x.label === "GitHub").href}>GitHub</Button>
          </li>
          <li className="ml-6">
            <Button to="/blog">StackOverflow</Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const Home = () => {
  useEffect(() => {
    const links = document.getElementsByTagName("link");
    links[0]?.parentElement.removeChild(links[0]);
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/output.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <Nav />
        <Footer />
      </div>
    </>
  );
};

export default Home;
