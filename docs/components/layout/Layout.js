import { alpha, ListSubheader, styled, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { FilterList } from "@material-ui/icons";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import GitHub from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../pages/_app";
import Link from "next/link";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Layout = ({ window, components, children }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List subheader={<ListSubheader>Getting Started</ListSubheader>}>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "getting-started", slug: "installation" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Installation" />
          </ListItem>
        </Link>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "getting-started", slug: "hello-world" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Hello world!" />
          </ListItem>
        </Link>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "getting-started", slug: "support" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Support" />
          </ListItem>
        </Link>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "getting-started", slug: "contributing" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Contributing" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List subheader={<ListSubheader>Theming</ListSubheader>}>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "theming", slug: "theming-overview" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Theming overview" />
          </ListItem>
        </Link>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "theming", slug: "color-scheme" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Color scheme" />
          </ListItem>
        </Link>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "theming", slug: "shape-scheme" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Shape scheme" />
          </ListItem>
        </Link>
        <Link
          href={{
            pathname: "/[folder]/[slug]",
            query: { folder: "theming", slug: "typography-scheme" },
          }}
          passHref
        >
          <ListItem button>
            <ListItemText primary="Typography scheme" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Components
            <IconButton size="small">
              <FilterList />
            </IconButton>
          </ListSubheader>
        }
      >
        {components?.map((component) => (
          <Link
            key={component.slug}
            href={{
              pathname: "/[folder]/[slug]",
              query: { folder: "components", slug: component.slug },
            }}
            passHref
          >
            <ListItem button>
              <ListItemText primary={component.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Material-UI
          </Typography>
          <Hidden mdDown>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Hidden>
          <div>
            <Box display={"inline"} mx={1}>
              <Tooltip title="Toggle light/dark mode">
                <IconButton
                  size="large"
                  aria-label="Toggle light/dark mode"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={colorMode.toggleColorMode}
                >
                  {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Tooltip title="GitHub repository">
              <IconButton
                size="large"
                aria-label="GitHub repository"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="https://github.com/yamankatby/react-native-material"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
