import type { Metadata } from 'next';
import './globals.css';
const title='山海之间｜2026年国庆行程规划';
const description='福州出发，千岛湖＋屯溪、泰宁、漳州＋南靖＋东山、梅州四套四天三晚行程。对比两组日期，查看真实景点照片、交通参考与携程大床房报价。';
const photo='https://meizi-zjol-1577-pub.zjol.com.cn/czjsb/202508/1951128404807069698_1280px.jpg';
export const metadata: Metadata = {title,description,icons:{icon:'/favicon.svg'},openGraph:{title,description,type:'website',locale:'zh_CN',images:[{url:photo,alt:'千岛湖群岛实景，来源浙江在线'}]},twitter:{card:'summary_large_image',title,description,images:[photo]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
