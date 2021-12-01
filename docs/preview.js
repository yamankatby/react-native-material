const defaults = {
  name: "Example",
  description: "Simple code example",
  dependencies: "@react-native-material/core@1.2.5",
  loading: "lazy",
  supportedPlatforms: "mydevice,ios,android,web",
  platform: "web",
  preview: "true",
  theme: "light"
};

const parseParams = meta => {
  const data = meta
    .trim()
    .replace("with-preview", "")
    .trim()
    .split(";")
    .map(x =>
      x
        .trim()
        .split(":")
        .map(y => y.trim())
    );
  const get = key => data.find(y => y[0] === key)?.[1];
  let o = {};
  Object.entries(defaults)
    .map(([key, value]) => [key, get(key) ?? value])
    .forEach(([key, value]) => {
      o[key] = value;
    });
  return o;
};

module.exports = () => {
  const transform = node => {
    if (node.type === "code" && node.meta?.startsWith("with-preview")) {
      const params = parseParams(node.meta);
      return [
        {
          type: "html",
          value: `<div class="snack-player" data-snack-name="${params.name}" data-snack-description="${
            params.description
          }" data-snack-code="${encodeURIComponent(node.value)}" data-snack-dependencies="${
            params.dependencies
          }" data-snack-loading="${params.loading}" data-snack-supportedPlatforms="${
            params.supportedPlatforms
          }" data-snack-platform="${params.platform}" data-snack-preview="${params.preview}" data-snack-theme="${
            params.theme
          }"></div>`
        }
      ];
    }
    if (Array.isArray(node.children)) {
      let index = 0;
      while (index < node.children.length) {
        const result = transform(node.children[index]);
        if (result) {
          node.children.splice(index, 1, ...result);
          index += result.length;
        } else {
          index += 1;
        }
      }
    }

    return null;
  };

  return transform;
};
