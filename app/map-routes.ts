import roadResults from './road-results.json';
export type RouteLink={from:string;to:string;url:string;verified?:boolean};
const city=(n:string)=>/福州/.test(n)?'福州':/仙都|鼎湖峰|朱潭山|小赤壁/.test(n)?'缙云':/丽水|画乡|古堰/.test(n)?'丽水':/云和|梯田/.test(n)?'云和':/歙县|徽州|格林豪泰|渔梁|新安江|阳产|深渡/.test(n)?'歙县':/黄山北/.test(n)?'黄山':/千岛湖/.test(n)?'淳安':/泰宁|金湖|九龙潭|长兴/.test(n)?'泰宁':/梅州|客家|嘉应|千佛塔|东山书院/.test(n)?'梅州':/磐安围/.test(n)?'兴宁':/热矿泥|五华/.test(n)?'五华':/土楼|田螺坑|裕昌楼|塔下/.test(n)?'南靖':/东山|南门湾|风动石/.test(n)?'东山':'漳州';
export function drivingLink(from:string,to:string):RouteLink{
 if(from==='华大酒店（泰宁古城店）'&&to==='金湖旅游景区-售票处')return {from,to,url:'https://j.map.baidu.com/t/Ug2qEt',verified:true};
 const result=roadResults.find(r=>r.origin===from&&r.destination===to);
 if(result)return {from,to,url:result.url,verified:true};
 const params=new URLSearchParams({origin:from,destination:to,origin_region:city(from),destination_region:city(to),mode:'driving',output:'html',coord_type:'bd09ll',src:'webapp.holiday2026.guide'});
 return {from,to,url:'https://api.map.baidu.com/direction?'+params};
}
// Only road legs. No rail or ferry segment is presented as a driving route.
const roadLegs:Record<string,Record<string,[string,string][]>>={
 qiandao:{'0-0':[['福州鼓楼区','福州站'],['千岛湖站','千岛湖绿城蓝湾度假酒店']],'1-0':[['千岛湖绿城蓝湾度假酒店','千岛湖中心湖区旅游码头']],'1-1':[['千岛湖中心湖区旅游码头','千岛湖绿城蓝湾度假酒店']],'2-0':[['千岛湖绿城蓝湾度假酒店','千岛湖站'],['歙县北站','格林豪泰酒店（歙县徽州古城店）']],'2-1':[['格林豪泰酒店（歙县徽州古城店）','歙县徽州古城'],['歙县徽州古城','歙县渔梁古镇']],'2-2':[['歙县渔梁古镇','歙县徽州古城'],['歙县徽州古城','格林豪泰酒店（歙县徽州古城店）']],'3-0':[['格林豪泰酒店（歙县徽州古城店）','歙县深渡码头']],'3-1':[['歙县深渡码头','阳产土楼游客中心']],'3-2':[['阳产土楼游客中心','歙县北站'],['福州站','福州鼓楼区']]},
 taining:{'0-0':[['福州鼓楼区','华大酒店（泰宁古城店）']],'1-0':[['华大酒店（泰宁古城店）','金湖旅游景区-售票处']],'1-1':[['金湖旅游景区-售票处','华大酒店（泰宁古城店）']],'2-0':[['华大酒店（泰宁古城店）','泰宁九龙潭长兴服务区']],'2-1':[['泰宁九龙潭长兴服务区','泰宁古城']],'3-1':[['泰宁古城','福州鼓楼区'],['泰宁古城','泰宁站']]},
 zhangzhou:{'0-0':[['福州鼓楼区','漳州宾馆']],'0-1':[['漳州宾馆','漳州古城']],'1-0':[['漳州宾馆','南靖田螺坑土楼群']],'1-1':[['南靖田螺坑土楼群','南靖裕昌楼'],['南靖裕昌楼','南靖塔下村'],['南靖塔下村','漳州宾馆']],'2-0':[['漳州宾馆','东山华福酒店']],'2-1':[['东山华福酒店','东山南门湾']],'2-2':[['东山南门湾','东山华福酒店']],'3-0':[['东山华福酒店','东山风动石景区']],'3-1':[['东山风动石景区','福州鼓楼区']]},
 meizhou:{'0-0':[['福州鼓楼区','梅州昌盛豪生大酒店']],'1-0':[['梅州昌盛豪生大酒店','中国客家博物馆'],['中国客家博物馆','梅州东山书院']],'1-1':[['梅州东山书院','梅州千佛塔寺'],['梅州千佛塔寺','嘉应古城']],'1-2':[['嘉应古城','梅州昌盛豪生大酒店']],'2-0':[['梅州昌盛豪生大酒店','兴宁磐安围']],'2-1':[['兴宁磐安围','五华热矿泥温泉'],['五华热矿泥温泉','梅州昌盛豪生大酒店']],'3-0':[['梅州昌盛豪生大酒店','福州鼓楼区']]},
 lishui:{'0-0':[['福州鼓楼区','丽水画乡壹号酒店']],'1-0':[['丽水画乡壹号酒店','云和梯田景区游客中心']],'1-1':[['云和梯田景区游客中心','丽水画乡壹号酒店']],'2-0':[['丽水画乡壹号酒店','缙云仙都景区-游客中心']],'2-1':[['缙云仙都景区-游客中心','丽水画乡壹号酒店']],'3-1':[['丽水画乡壹号酒店','福州鼓楼区']]}
};
export const slotRouteLinks=(id:string,i:number,j:number,morning=true,afternoon=true)=>{const legs=roadLegs[id]?.[`${i}-${j}`]||[];return legs.map(([a,b],k)=>drivingLink(id==='qiandao'&&i===2&&j===2&&k===0&&!afternoon?'格林豪泰酒店（歙县徽州古城店）':id==='qiandao'&&i===3&&j===2&&k===0&&!morning?'格林豪泰酒店（歙县徽州古城店）':id==='meizhou'&&i===2&&j===1&&k===0&&!morning?'梅州昌盛豪生大酒店':a,b));};
