// id is obtained from images stored on Uploadcare CDN
export const getImageParameters = (id: string, size: string = '1000x560') => 
  `https://ucarecdn.com/${id}/-/preview/${size}/-/format/auto/-/quality/smart/`;