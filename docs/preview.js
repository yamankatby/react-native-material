module.exports = () => {
  const transform = node => {
    if (node.type === "code" && node.meta === "with-preview") {
      return [{
        type: 'html',
        value: `<div data-snack-code="${encodeURIComponent(node.value)}" data-snack-dependencies="@react-native-material/core@1.2.0" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light"></div>`
      }]
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
