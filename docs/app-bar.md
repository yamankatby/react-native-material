| Name | Type | Default | Description |
|---|---|---|---|
| title | string \| React.ReactElement |  |  |
| variant | "regular" \| "prominent" | "regular" |  |
| position | "top" \| "bottom" | "top" |  |
| color | PaletteColor | "primary" |  |
| tintColor | PaletteColor |  |  |
| centerTitle | boolean | Platform.OS === "ios" |  |
| image | React.ReactElement |  |  |
| leading | React.ReactElement<br>\| React.ReactElement[]<br>\| ((props: { color: string; size: number }) => React.ReactElement \| React.ReactElement[] \| null) |  |  |
| trailing | React.ReactElement<br>\| React.ReactElement[]<br>\| ((props: { color: string; size: number }) => React.ReactElement \| React.ReactElement[] \| null) |  |  |