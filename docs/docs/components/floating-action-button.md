# Floating action button

A floating action button (FAB) represents the primary action of a screen.

A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all
screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and
extended.

Only use a FAB if it is the most suitable way to present a screen's primary action.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Fab)
[`🎨 Material Design`](https://material.io/components/buttons-floating-action-button)

## Basic FAB

<iframe src="http://localhost:19006/components/fab?section=basic"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />

```js
import { FAB } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

<FAB icon={props => <Icon name="plus" {...props} />}/>
<FAB icon={props => <Icon name="pencil" {...props} />} color="primary"/>
<FAB
  variant="extended"
  icon={props => <Icon name="navigation" {...props} />}
  label="Navigate"
  color="primary"
/>
```

## Size

<iframe src="http://localhost:19006/components/fab?section=size"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />

```js
import { FAB } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

<FAB icon={props => <Icon name="plus" {...props} />} color="primary" size="regular"/>
<FAB icon={props => <Icon name="plus" {...props} />} color="primary" size="mini"/>
```

<iframe src="http://localhost:19006/components/fab?section=size-extended"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />

```js
import { FAB } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

<FAB
  variant="extended"
  label="Button"
  icon={props => <Icon name="plus" {...props} />}
  color="primary"
  size="regular"
/>
<FAB
  variant="extended"
  label="Button"
  icon={props => <Icon name="plus" {...props} />}
  color="primary"
  size="mini"
/>
```

## Color

<iframe src="http://localhost:19006/components/fab?section=color"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />

```js
import { FAB } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

<FAB icon={props => <Icon name="lock" {...props} />}/>
<FAB icon={props => <Icon name="lock" {...props} />} tintColor="red"/>
<FAB icon={props => <Icon name="lock" {...props} />} color="onPrimary"/>
<FAB icon={props => <Icon name="lock" {...props} />} color="#FDAC42"/>
```

## Loading

<iframe src="http://localhost:19006/components/fab?section=loading"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />

<iframe src="http://localhost:19006/components/fab?section=loading-extended"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />

## Visible

<iframe src="http://localhost:19006/components/fab?section=visible"
width="100%"
height="300"
style={{ marginTop: 18, marginBottom: 18, border: "1px solid rgba(0,0,0,.12)", borderRadius: 8 }} />
