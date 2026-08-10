import './globals.css'
import { AdminAuthProvider } from '@/context/AdminAuthContext'

export const metadata = {
  title: 'Rua Sadiq Portal',
  description: 'Admin portal for product, category and material management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <AdminAuthProvider>{children}</AdminAuthProvider>
      </body>
    </html>
  )
}
