import './globals.css';

export const metadata = {
  title: 'Hava Durumu Uygulaması',
  description: 'Hava Durumu Bilgilerini Gösteren Uygulama',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}</body>
    </html>
  );
}
