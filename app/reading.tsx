import React from 'react';
export function hotelNames(text:string){return text.replace(/皇冠假日|福莱喜|金沙湾|蓝湾|假日|华大|闽江|华福|豪生/g,(name,offset)=>/^(酒店|大酒店|国际大酒店|饭店)/.test(text.slice(offset+name.length))?name:name+'酒店')}
export function TravelText({text}:{text:string}){return <>{hotelNames(text).split(/(自驾|驾车|高铁|铁路|动车|打车|步行|乘船|游船|竹筏|观光车|景交|缆车|G\d+|D\d+)/g).map((part,i)=>i%2?<strong className="travel-mode" key={i}>{part}</strong>:part)}</>}
export function StopDescription({text}:{text:string}){
 const sentences=hotelNames(text).split(/(?<=[。；])/).filter(Boolean);
 const notes=sentences.filter(x=>/^(若|如|遇|不保证|不承诺|严重|贵重|以.*为准|学宫内部|实际|两组日期|10月5日)/.test(x));
 const main=sentences.filter(x=>!notes.includes(x));
 return <><p>{main.join('')||notes.shift()}</p>{notes.length>0&&<details className="inline-note"><summary>当天提醒</summary><p>{notes.join('')}</p></details>}</>;
}

// Keep hotel location distances; travel durations belong to itinerary footers.
export function distanceOnly(text:string){
 return hotelNames(text).split(/[；。]/).map(part=>part.replace(/[，、](?:驾车|车程|步行).*$/, '')).filter(part=>!/(?:分钟|小时)/.test(part)).filter(Boolean).join('；');
}
