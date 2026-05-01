import { QrCode } from "@chakra-ui/react"

function qrcode(){
    return(
        <QrCode.Root value="...">
  <QrCode.Frame>
    <QrCode.Pattern />
  </QrCode.Frame>
</QrCode.Root>
    )}

export default qrcode;