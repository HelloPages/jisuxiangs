import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { LanguageProvider } from '@/context/LanguageContext';

// 阻止Font Awesome自动插入CSS，避免闪烁
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "极速箱 | Jisuxiang - 高效开发工具集成平台 | 程序员必备在线工具箱",
    template: "%s | 极速箱 | Jisuxiang"
  },
  description: "提供高效开发工具集成平台，程序员必备在线工具箱，包含JSON处理、编码转换、加密解密、时间转换等提升编程效率的神器",
  openGraph: {
    title: "极速箱 | Jisuxiang - 高效开发工具集成平台 | 程序员必备在线工具箱",
    description: "提供高效开发工具集成平台，程序员必备在线工具箱，包含JSON处理、编码转换、加密解密、时间转换等提升编程效率的神器",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
  alternates: {
    languages: {
      'zh-CN': '/',
      'en-US': '/'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 预加载字体和图标资源 */}
        <link rel="preload" href="/_next/static/media/fa-brands-400.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/fa-solid-900.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/media/fa-regular-400.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
