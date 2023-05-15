import { Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/project/styles/index.scss';
import { StoreProvider } from '@/project/providers/StoreProvider';

const spaceGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500']
});

export const metadata  = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {  
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
