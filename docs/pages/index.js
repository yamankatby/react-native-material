import { Box, Button, Chip, Container, CssBaseline, Stack, Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const w = 227;

export default function Index() {
  const [currentTheme, setCurrentTheme] = useState("default");
  return (
    <>
      <CssBaseline />
      <Box mb={5} style={{ backgroundColor: "#212121" }}>
        <Container>
          <Stack alignItems="center" py={12}>
            <Typography variant="h4" color="#fafafa">
              React Native Material
            </Typography>
            <Typography
              variant="subtitle1"
              color="#bdbdbd"
              textAlign="center"
              lineHeight={1.4}
              mt={1.4}
            >
              Modular and customizable Material Design UI components <br /> for
              React Native
            </Typography>
            <Stack direction="row" spacing={2} mt={3}>
              <Link
                href={{
                  pathname: "/[folder]/[slug]",
                  query: { folder: "getting-started", slug: "installation" }
                }}
                passHref
              >
                <Button
                  variant="outlined"
                  style={{
                    borderColor: "#424242",
                    color: "white",
                    borderRadius: 0
                  }}
                >
                  Get Started
                </Button>
              </Link>
              <Button
                href="https://github.com/yamankatby/react-native-material"
                target="_blank"
                variant="outlined"
                style={{
                  borderColor: "#424242",
                  color: "white",
                  borderRadius: 0
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Stack
          mb={1.5}
          direction="row"
          alignItems="flex-start"
          spacing={1}
          overflow="scroll"
        >
          {[
            "default",
            "basil",
            "crane",
            "fortnightly",
            "owl",
            "reply",
            "shrine"
          ].map((theme) => (
            <Chip
              key={theme}
              label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              onClick={() => setCurrentTheme(theme)}
              variant={theme === currentTheme ? "filled" : "outlined"}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          spacing={0.5}
          mt={0.5}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <Box key={num} borderRadius={4} overflow="hidden">
              <Image
                src={`/images/${currentTheme}-${num}.jpg`}
                width={w}
                height={w * 2.167}
                alt=""
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
}
