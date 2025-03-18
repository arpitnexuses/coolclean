import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Coolclean',
  description: 'Coolclean',
  generator: 'Coolclean',
  icons: {
    icon: 'https://www.coolclean.com/wp-content/uploads/2023/12/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="49b6dcfa-1ad7-4e4a-b1ac-f74c49ab79b8";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(ss,ex){
                window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
                (function(d,s){
                  fs=d.getElementsByTagName(s)[0];
                  function ce(src){
                    var cs=d.createElement(s); 
                    cs.src=src; 
                    cs.async=1; 
                    fs.parentNode.insertBefore(cs,fs); 
                  };
                  ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
                })(document,'script');
              })('3P1w24dNL698mY5n');
            `
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-LQ36N10N7D" />
      </body>
    </html>
  )
}
