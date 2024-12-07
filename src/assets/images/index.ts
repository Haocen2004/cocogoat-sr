import img_1 from '@/assets/images/xinqiong.png'
import img_2 from '@/assets/openscreenshare.png'
export const imageAlias = {
    [img_1]:
        'https://webstatic.mihoyo.com/upload/event/2023/03/28/77cb5426637574ba524ac458fa963da0_8938800417123864478.png',
    [img_2]:
        'https://upload-bbs.mihoyo.com/upload/2022/12/26/300350281/aca41a90b6d80f17c9b2f1d663e49625_7075418291258186431.png',
} as Record<string, string>
export const imageType = {
    xinqiong: img_1,
    openscreenshare: img_2,
} as Record<string, string>
export default (image: string) => {
    const _image = imageType[image] || image
    return imageAlias[_image] || _image
}
