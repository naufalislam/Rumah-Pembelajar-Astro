const fs = require('fs');
const path = require('path');

const mappings = [
  // Home
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXEAj_MagCBNyaLTiWZTQxXlSzi74dVFBnFie2JojPscfpiu9uyYi1W6_jEF_Xe8DCFhd_yYrU9lkX2sEFuzBawzfXCcoy6Eui-AKHFFK-Ocp-DmSIZkiSrleFGmPEcGYxJTIBs9TvyYGFrN0msEXL2CcWIhhEHWCmUZnwVLR4Fy_PX44qcjJ7WqDg0uxhuxRkaxRp9GEEfUwodk5K3KNM0UFYigp7DSGKlJHHrXe1lJwJtswNzQ8bbJy8UTqyW6cs6XHIu2bEwlc', local: '/images/home/hero.webp' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5uNGU5XfiK6X506nEsU6QLqYOG7eyfUuyczaHdz1-n5H-jqb-Ag1jWlQd5TrSccywveMUSTnrdCriWH1PRIcxW4gqy7a0iKDuj--oivMHXPpUq2V_71O86MTl1j37BiRW-Hspna0mjf-xFZpq-d1Wxw5X_LvrxdxNvGeT6Xknndbginyb8jzpjs2jn46w88KytEekh38T3wSZi_ofqoVOL_EywkG1WqhEPCC-vF0teCerbzeKNvlpMu3dTT-uEUZFxasuV_90OQ', local: '/images/home/about.webp' },
  
  // About
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKWA4NqSOHyj9ULB9m9sHHQbjVp57ziGfdV40G_qXQxoWreZoksYm7_8Fpt-izMkkAOBaubWDqxhBK2BzURdbSRInE-SA3yqwH7TZsafPt9tBQXFOWVFwtuTF7KT2sF8i2HaHU1Aaxp2UFEo27B_RhITlmXDs7warwEs8E6A200A-gXfjaRYysFx_iA-qBrvWbJD1pCcLa7-Xi4Vcghq6POd9GPK3uOgKIRhhZ9Y2d2wo05EwQobXI3_tJwc5PtE_OKhOlzTFV1AA', local: '/images/about/hero.webp' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd5KMWgkciCxbw_rY1QxVlTN6C3qhQQbt3JSoczCHYYTol9tbB7odoBfhwcwQFjgGhUis_NDj8y5hJ-QAXx_CPd5-90Ou5uQ-qwNSGnu4VltCKHEyZNJ6thWxbpmIROcf0IgdxiqaS0qPvBjWHUuqLn7XLoGPZ1Oqxj68VHxRAleJVwbUHzF6yR-OZpGhMq5kqt3iP_iXHIsXwYwHO9hvA6zXuzflACtb_UsaWNui8NQ09VezVjtoYRA0k7IWnDOZVJL7NJN7ZLq8', local: '/images/about/story.webp' },
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-APOSjIQjivIv39YBdLk_KZby5NOwQ4lYkZfKx1TB_1w6n58hfAsuj5PuldjSWTmczV833TfTzx3oni3O9ZZVch2WQjgRhmUN09LuPS5dIGkhhNoFAxadVI-nU6NCggl9KsFV8hO-_UwmghxbXgDfxi5i4oYoL-GOFgTvSHomDqf4M9Tl2OJ83UrgoFoTwE3m3FMd4T_mnXKju3YVlf5Wz3zFECx0-9uwI-iClUx1Nftok6p6m26GKkwsoehDnZvgfGQZvOkihz8', local: '/images/about/philosophy.webp' },
  
  // Facilities Page Hero
  { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-SSy7o6pzbvU4vlvvjAhfawztKrCtRCCafx3tLe48i2MHCCd2RH9esEilTD7nAZ634SdQPjIto319PUqtE0rEja-w8Kc01CkY3Dwjxi_RPfgSBFmMMdnB-2BbGdsungETsuHT0SDVUMqg280Y_3F3FM1Es82H3GKW4Us32_2yg_Q6OGa70FEnyccfr_VcbN7aPs25VcFOX30uZP3anKMc-Tl4Xm1Y3ayW76CyLr6YYEGQMfaZnyDyn5qrAiPAqxwuXEr6V1_8CtM', local: '/images/facilities/header.webp' },
  
  // Facilities Main
  { url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rm1-main.webp' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop', local: '/images/facilities/rm2-main.webp' },
  { url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rm3-main.webp' },
  { url: 'https://images.unsplash.com/photo-1533104816173-19cece22c604?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/ao1-main.webp' },
  { url: 'https://images.unsplash.com/photo-1596422846543-74c6fc0e241e?q=80&w=1692&auto=format&fit=crop', local: '/images/facilities/ao2-main.webp' },
  { url: 'https://images.unsplash.com/photo-1560067174-897b69abfa26?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/ao3-main.webp' },
  { url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rs-main.webp' },

  // Details Ruang Meeting 1
  { url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1325&auto=format&fit=crop', local: '/images/facilities/rm1-detail1.webp' },
  { url: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rm1-detail2.webp' },

  // Details Ruang Meeting 2
  { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1374&auto=format&fit=crop', local: '/images/facilities/rm2-detail1.webp' },
  { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rm2-detail2.webp' },

  // Details Ruang Meeting 3
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rm3-detail1.webp' },
  { url: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop', local: '/images/facilities/rm3-detail2.webp' },

  // Details Area Outdoor 1
  { url: 'https://images.unsplash.com/photo-1545620950-e7f0174be6ab?q=80&w=1467&auto=format&fit=crop', local: '/images/facilities/ao1-detail1.webp' },
  { url: 'https://images.unsplash.com/photo-1620021303248-73599955c464?q=80&w=1474&auto=format&fit=crop', local: '/images/facilities/ao1-detail2.webp' },

  // Details Area Outdoor 2
  { url: 'https://images.unsplash.com/photo-1416879598555-4672bb6076fb?q=80&w=1471&auto=format&fit=crop', local: '/images/facilities/ao2-detail1.webp' },
  { url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1476&auto=format&fit=crop', local: '/images/facilities/ao2-detail2.webp' },

  // Details Area Outdoor 3
  { url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/ao3-detail1.webp' },
  { url: 'https://images.unsplash.com/photo-1543781290-332906b32de8?q=80&w=1543&auto=format&fit=crop', local: '/images/facilities/ao3-detail2.webp' },

  // Details Ruang Serbaguna
  { url: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1470&auto=format&fit=crop', local: '/images/facilities/rs-detail1.webp' },
  // Detail 2 for Rs is the same as Rm1-detail1... wait, in my list:
  // "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1325&auto=format&fit=crop" is used in testing.
  // I will replace all instances of this URL.
];

function getAllAstroFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllAstroFiles(fullPath));
    } else if (file.endsWith('.astro')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getAllAstroFiles('./src/pages');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  mappings.forEach(m => {
    // using split join to replace all instances
    if (content.includes(m.url)) {
      content = content.split(m.url).join(m.local);
      changed = true;
    }
  });

  // Also replace some left over facility-details images if they exist:
  const facDetM = [
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk0eu6-wy47sKD0p5pnBLGvV6hRXx_OB9mlpIgKw-CkZVUyhaiSg1G0jxYbsant4ESwyPkRlRPLCWDrVCZyjltCX_IDzbdyAj61qpUZAUwwSCEHzkxc0-9qlNPs--N0KTHryvOXRixHRtwYCqGnLvG7d1JEv8rhHL5Csbas9xh46BortVOWDo5w_o-ZL34YFf2F8M0I1NcJnVmRJSVWQHGYCkraBHRDlu7sFsN-MJdKA3MrzjTKUnZoafCGfcujYiNT5yGtsXqXbI', local: '/images/facilities/rs-main.webp' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaO2vKJL740ad8F7Y2TzJdObXg7SM_En8SPVqLftCqOSicg-44Y2YBJaSC5AjV1tRhUDC7Xjp7UdmbivZmJ9WAVoC4dNDEr0v263U16eA9g4Y8ACo94V14M0of180hUSS7YbNt8GSPsmYIYb8g08d358j5MAgPGBgEaSEXTx0Zb70SqRs_Nq73JaABJNDJ7hRrCQipW708bGW0HcZY-Pwll6uJnfPXXQlkzlb_Z5ARPuAVOmiFlbYLfJLTJAOocYiyiQ0LGusgjZ0', local: '/images/facilities/rs-detail1.webp' },
    { url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjrEFodT6scJbDtw5dWoTi3dEY7PyK9yEAJJXhatyKcLytxzGe1ImKxzry5K71FvyFyx0xdEllbaMcBkcH29zVj5Zp1oMM2qQQqjN6UsOYSNHEwTru1cnNJwHOPq2MxCs8w_LmQEWIu8acLu2fhJM1Twrx9XOVRnjLaprEGfl6D4pcUGM6zBc9jS8XNeJc6d2HP277hm9blh329GnvxNYtHAxKS2Tu8BxXt8ZJUOX5RyFX-nccq2FYtmxKn2Jpne3vY3RmdaeGWfA', local: '/images/facilities/rs-detail2.webp' },
  ];
  facDetM.forEach(m => {
    if (content.includes(m.url)) {
      content = content.split(m.url).join(m.local);
      changed = true;
    }
  });


  if(changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated images in ${file}`);
  }
});
