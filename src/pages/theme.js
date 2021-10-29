// theme.js

import { extendTheme } from "@chakra-ui/react"

const extensions = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: "Noto Sans JP",
    body: "Noto Sans JP",
  },
}

const theme = extendTheme({ extensions })

export default theme
