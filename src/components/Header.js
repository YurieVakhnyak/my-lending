import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PhonelinkTwoToneIcon from "@mui/icons-material/PhonelinkTwoTone";
import { blue, grey } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

const pages = ["HOME", "Тести", "Статті", "Відео", "Про мене", "Записатися"];
const title = ["ПСИХОЛОГ", "ЮРІЙ ВАХНЯК"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const routes = {
    HOME: "/",
    "Про мене": "/about",
    Тести: "/tests",
    Статті: "/articles",
    Відео: "/videos",
    Записатися: "/appointment",
  };

  return (
    <AppBar position="sticky">
      <Container minWidth="xs" maxWidth="xl">
        <Toolbar disableGutters>
          <PhonelinkTwoToneIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              fontSize: 40,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              height: "100%",
              p: 1,
            }}
          >
            {title.map((title, index) => (
              <NavLink to={"/appointment/"} style={{ textDecoration: "none" }}>
                <Typography
                  key={title + index + "key"}
                  variant="h1"
                  Wrap
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    letterSpacing: title === "ONLINE" ? ".3rem" : "normal",
                    color: "white",
                    "&:hover": {
                      color: blue[100],
                    },
                  }}
                >
                  {title}
                </Typography>{" "}
              </NavLink>
            ))}
          </Box>

          <Box
            sx={{
              // flexGrow: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={routes[page]}>
                    <Button
                      textAlign="center"
                      sx={{
                        color: grey[500],
                        "&:hover": {
                          color: blue[400],
                        },
                      }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {title.map((title, index) => (
              <NavLink to="/appointment/" style={{ textDecoration: "none" }}>
                <Typography
                  key={index + title + "list"}
                  variant="h1"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontSize: { xs: "0.8rem", sm: "1.5rem" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",

                    color: "white",
                    "&:hover": {
                      color: blue[100],
                    },
                  }}
                >
                  {title}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <NavLink to={routes[page]} style={{ textDecoration: "none" }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",

                    "&:hover": {
                      color: blue[100],
                    },

                    display: "block",
                  }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
