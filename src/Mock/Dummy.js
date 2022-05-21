/**
 * Define and export the dummy data.
 */

// export const Playlist =[{
//   id:'001',
//   name:'Stargroves',
//   songs: 20,
  
//   // thumbnail: require('Assets/images/musicoding.png'),

// },
// {
//   id:'002',
//   name:'so it goes',
//   songs: 5,
  
//   // thumbnail: require('Assets/images/home.png'),

// },];

export const Favorites = 
[ 
  {
    id: '001',
    //url: require('Assets/images/NoiNayCoAnh.mp3'),
    title:'Nơi này có anh',
    album:'Nơi này có anh',
    artist:'Sơn Tùng MTP',

    thumbnail: require('Assets/images/thumnail_2.png'),
  },
  {
    id:'002',
    //url: require('Assets/images/Chay-Ve-Khoc-Voi-Anh.mp3'),
    title:'Chạy về khóc với anh',
    album:'',
    artist:'Erik',

    thumbnail: require('Assets/images/thumnail_3.png'),
  },
  {
    id:'003',
    // url: require('Assets/images/LA-LUNG-Original-Vu.mp3'),
    title:'Lạ Lùng',
    album:'Lạ Lùng',
    artist:'Vũ',

    thumbnail: require('Assets/images/thumnail_1.png'),
  },
 
];

const dummyData = { Favorites };

export default dummyData;
