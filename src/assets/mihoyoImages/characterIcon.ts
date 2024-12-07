import { underlineToCamelW } from '@/utils/caseConvert'

const list = [
    'Albedo',
    'Aloy',
    'Ambor',
    'Ayaka',
    'Ayato',
    'Barbara',
    'Beidou',
    'Bennett',
    'Chongyun',
    'Diluc',
    'Diona',
    'Eula',
    'Feiyan',
    'Fischl',
    'Ganyu',
    'Gorou',
    'Hutao',
    'Itto',
    'Kaeya',
    'Kazuha',
    'Keqing',
    'Klee',
    'Kokomi',
    'Lisa',
    'Mona',
    'Ningguang',
    'Noel',
    'Paimon',
    'Qin',
    'Qiqi',
    'Razor',
    'Rosaria',
    'Sara',
    'Sayu',
    'Shenhe',
    'Shougun',
    'Sucrose',
    'Tartaglia',
    'Tohma',
    'Venti',
    'Xiangling',
    'Xiao',
    'Xingqiu',
    'Xinyan',
    'Yae',
    'Yoimiya',
    'Yunjin',
    'Zhongli',
    'PlayerGirl',
    'PlayerBoy',
    'Shinobu',
    'Yelan',
]
const mapping = {
    traveler: 'PlayerGirl',
    raiden_shogun: 'Shougun',
    yanfei: 'Feiyan',
    amber: 'Ambor',
    noelle: 'Noel',
    jean: 'Qin',
    thoma: 'Tohma',
    yae_miko: 'Yae',
    kamisato_ayato: 'Ayato',
} as Record<string, string>
export const template =
    'https://uploadstatic.mihoyo.com/darkmatter/hkrpg/prod_gf_cn/item_icon_745c4j/c5dbbc68151c80181e8cf8180130d5ea.png?x-oss-process=image/crop,w_100,h_100,y_2,g_north'
export const characterIcon = (name: string) => {
    let n = ''
    if (mapping[name]) n = mapping[name]
    else if (list.includes(underlineToCamelW(name))) n = underlineToCamelW(name)
    else if (list.includes(underlineToCamelW(name.replace('_', '')))) n = underlineToCamelW(name.replace('_', ''))
    else if (list.includes(underlineToCamelW(name.split('_')[1]))) n = underlineToCamelW(name.split('_')[1])
    if (n === '') {
        n = name
    }
    return template.replace('#', n)
}
