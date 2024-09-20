import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Hava Durumu Uygulaması',
  description: 'Hava Durumu Bilgilerini Gösteren Uygulama',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
        {children}</body>
    </html>
  );
}
