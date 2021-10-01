import React from 'react'
import Head from "@docusaurus/core/lib/client/exports/Head";
import Link from "@docusaurus/core/lib/client/exports/Link";
// import '../../static/output.css'

const Nav = () => {
  return (
    <nav className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto flex flex-col">
      <div className="flex justify-end">
        <ul className="flex text-lg font-serif font-medium">
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
              <a className="px-3 py-1.5 rounded bg-primary text-on-primary">
                Get Started
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-2 text-lg font-serif font-medium">
        <button className="px-2 bg-primary text-on-primary rounded-full">npm</button>
        <button className="ml-4 px-2 bg-primary text-on-primary rounded-full">yarn</button>
        <span className="ml-4">npm i @react-native-material/core</span>
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <header className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto grid grid-cols-2 gap-14">
      <div className="py-14">
        <h1 className="text-5xl font-serif font-bold">Material UI for React Native.</h1>
        <p className="text-2xl mt-4 text-primary font-serif font-medium">#react-native @material-design</p>

        <p className="mt-14 text-2xl ">
          React Native Material is a set of pre-built, cross-platform, highly customizable UI components that follow
          Material Design principles.
        </p>

        <div className="mt-14">
          <Link to="/docs/getting-started">
            <a className="px-3 py-1.5 rounded text-lg bg-primary text-on-primary">
              Get Started
            </a>
          </Link>
          <button className="text-lg ml-7">Docs</button>
        </div>

        <div className="w-14 h-0.5 bg-gray-100 my-14" />

        <iframe src="https://ghbtns.com/github-btn.html?user=yamankatby&repo=react-native-material&type=star&count=true"
                frameBorder="0" scrolling="0" width="170" height="30" title="GitHub" />

        <p className="text-secondary-variant text-lg mt-4">
          We're just getting started 🚀, please consider supporting the library
          <br />
          by giving it a star 🌟 on GitHub.
        </p>
      </div>
      <div className="bg-[#FAFAFA] rounded">

      </div>
    </header>
  )
}

export const LINKEDIN = 'https://www.linkedin.com/in/yamankatby/';
export const GITHUB = 'https://github.com/yamankatby';
export const DRIBBBLE = 'https://dribbble.com/yamankatby';
export const YOUTUBE = 'https://www.youtube.com/channel/UCLR1815BrF78UoTnFFaLZOw';
export const EMAIL = 'me@yamankatby.com';

const Footer = ({ setIsResumeModalIn }) => (
  <footer className="p-6 md:p-8 lg:p-10 xl:p-14 2xl:container 2xl:mx-auto">
    <div className="flex flex-col pt-6 md:pt-8 lg:pt-10 xl:pt-14 border-t-2 border-black border-opacity-5">
      <div className="flex flex-col items-start">
        <a href={`mailto:${EMAIL}`} className="text-xl font-serif">
          @react-native-material/core
        </a>
        <p className="mt-4 text-on-background" style={{ maxWidth: 340 }}>
          Modular and customizable Material Design UI components for React Native.
        </p>
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-14 flex flex-col sm:flex-row justify-between font-serif">
        <ul className="flex flex-col sm:flex-row">
          <li>
            <Link href="/">
              <a className="text-lg" title="About Me">
                Docs
              </a>
            </Link>
          </li>
          <li className="mt-1 sm:mt-0 sm:ml-8">
            <Link href="/work">
              <a className="text-lg" title="Work">
                Blog
              </a>
            </Link>
          </li>
          <li className="mt-1 sm:mt-0 sm:ml-8">
            <button className="text-lg" title="Resume / CV">
              Templates
            </button>
          </li>
          <li className="mt-1 sm:mt-0 sm:ml-8">
            <Link href="/contact-me">
              <a className="text-primary text-lg" title="Contact Me">
                Get Started
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex mt-6 sm:mt-0">
          <li className="ml-8">
            <a href={GITHUB} title="GitHub" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
              <span className="hidden lg:inline text-lg">GitHub</span>
              <img src="/images/github.svg" alt="GitHub" className="lg:hidden w-6" />
            </a>
          </li>
          <li className="ml-8">
            <a href={DRIBBBLE} title="Dribbble" target="_blank" rel="noreferrer" referrerPolicy="no-referrer">
              <span className="hidden lg:inline text-lg">StackOverflow</span>
              <img src="/images/dribbble.svg" alt="Dribbble" className="lg:hidden w-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export const Home = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/output.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <Nav />
      <Header />
      <Footer />
    </>
  )
};

export default Home;
