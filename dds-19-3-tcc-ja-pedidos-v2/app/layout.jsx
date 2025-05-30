import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "DDS-19-3 TCC JÁ Pedidos",
  description: "Sistema de gerenciamento de pedidos",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
