import React from "react";

export const path = "https://react-native-material-example-vvln0aq3t-yamankatby.vercel.app/"

const Example = ({ component, section }) => {
  return (
    <iframe
      src={`${path}/components/${component}?section=${section}`}
      width="100%"
      height="300"
      style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }}
    />
  );
};

export default Example;
