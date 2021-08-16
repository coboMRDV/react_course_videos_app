import axios from 'axios';

// const KEY_1 = 'AIzaSyAaNDQiLblKaEmp_ocXLwim1DKOXrArrOI';
const KEY_2 = 'AIzaSyCVsBdWPrk1oyfoa_Fubb1FtZuGowpfxZ0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY_2,
  },
});
