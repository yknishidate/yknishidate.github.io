// theme.js

import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: "Noto Sans JP",
    body: "Noto Sans JP",
  },
}

const theme = extendTheme({ config })

export default theme
