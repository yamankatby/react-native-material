import React from 'react'
import Head from "@docusaurus/core/lib/client/exports/Head";
import Link from "@docusaurus/core/lib/client/exports/Link";
import '../../static/output.css'

const Nav = () => {
  return (
    <nav className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto flex flex-col">
      <div className="flex justify-end">
        <ul className="flex text-lg">
          <li>
            <Link to="/docs/getting-started">Templates</Link>
          </li>
          <li className="ml-14">
            <a href="#">GitHub</a>
          </li>
          <li className="ml-14">
            <Link to="/docs/getting-started">Blog</Link>
          </li>
          <li className="ml-11">
            <Link to="/docs/getting-started">
              <a className="px-3 py-1.5 rounded bg-red-300">
                Get Started
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-2 text-lg">
        <button className="px-2 bg-red-300 rounded-full">npm</button>
        <button className="ml-4 px-2 bg-red-300 rounded-full">yarn</button>
        <code className="ml-4">npm i @react-native-material/core</code>
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <header className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto grid grid-cols-2">
      <div>
        <h1 className="text-5xl">Material UI for React Native.</h1>
        <p className="text-2xl mt-4">#react-native @material-design</p>

        <p className="mt-14 text-2xl">
          React Native Material is a set of pre-built, cross-platform, highly customizable UI components that follow
          Material Design principles.
        </p>

        <div className="mt-14">
          <Link to="/docs/getting-started">
            <a className="px-3 py-1.5 rounded text-lg bg-red-300">
              Get Started
            </a>
          </Link>
          <button className="text-lg ml-7">Docs</button>
        </div>
      </div>
      <div>
        asdf
      </div>
    </header>
  )
}

export const Home = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/output.css" />
      </Head>
      <Nav />
      <Header />
    </>
  )
};

export default Home;
