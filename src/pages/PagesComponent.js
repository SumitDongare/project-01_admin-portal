import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
const drawerWidth = 240;

export default function PagesComponent() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  console.log(isAuthenticated);
  useEffect(() => {
    //  console.log("navigate back")
    // if(!isAuthenticated){
    //   navigate('/login')
    // }
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Pannel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { title: "Dashboard", route: "dashboard", icon: <DashboardIcon /> },
            {
              title: "Categories",
              route: "categories",
              icon: <InboxIcon />,
              isCollapsable: true,
              children: [
                {
                  title: "Main Categories",
                  route: "categories/main-categories",
                  icon: <DashboardIcon />,
                },
                {
                  title: "Sub Categories",
                  route: "categories/sub-categories",
                  icon: <DashboardIcon />,
                },
              ],
            },
            { title: "Products", route: "products", icon: <InventoryIcon /> },
            { title: "Orders", route: "orders", icon: <ShoppingCartIcon /> },
            { title: "Users", route: "users", icon: <GroupIcon /> },
          ].map((obj, index) => (
            <React.Fragment key={obj.title}>
              <ListItemButton
                onClick={() => {
                  navigate(obj.route);
                  if (obj.isCollapsable) {
                    setMenuOpen(!menuOpen);
                  }
                }}
              >
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.title} />
                {obj.isCollapsable ? (
                  <>{menuOpen ? <ExpandLess /> : <ExpandMore />}</>
                ) : null}
              </ListItemButton>
              {obj.isCollapsable && (
                <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>

                    {obj.children.map(child=>{
                      return <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate(child.route)}>
                      <ListItemIcon>
                        {child.icon}
                      </ListItemIcon>
                      <ListItemText primary={child.title} />
                    </ListItemButton>
                    })}

                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div>
          Main Content
          <Routes>
            <Route
              path="/"
              element={<Navigate to="dashboard" replace={true} />}
            ></Route>
            <Route
              path="dashboard"
              element={<div>Dashboard component</div>}
            ></Route>
            <Route
              path="categories"
              element={<div>Categories component</div>}
            ></Route>
            <Route
              path="products"
              element={<div>Products component</div>}
            ></Route>
            <Route path="orders" element={<div>Orders component</div>}></Route>
            <Route path="Users" element={<div>Users component</div>}></Route>
          </Routes>
        </div>
      </Main>
    </Box>
  );
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
