import { Layout } from "@components/layout";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function post({ meta, md, listItems }) {
  return (
    <Layout components={listItems}>
      <ReactMarkdown>{md}</ReactMarkdown>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [];

  const folders = await readdir(path.resolve("./docs"));
  for (let index = 0; index < folders.length; index++) {
    const folder = folders[index];
    const files = await readdir(path.resolve("./docs", folder));
    files.forEach((slug) => {
      paths.push({ params: { folder, slug: slug.replace(".md", "") } });
    });
  }

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps(ctx) {
  const listItems = [];

  const componentsPath = path.join("docs/components");
  const components = await readdir(componentsPath);
  for (let index = 0; index < components.length; index++) {
    const filename = components[index];
    const content = await readFile(
      path.join("docs/components", filename),
      "utf-8"
    );
    const { data: meta } = matter(content);
    listItems.push({ ...meta, slug: filename.replace(".md", "") });
  }

  const filePath = path.join(
    "docs",
    ctx.params.folder,
    `${ctx.params.slug}.md`
  );
  const content = await readFile(filePath, "utf-8");
  const { data: meta, content: md } = matter(content);

  return { props: { meta, md, listItems } };
}
