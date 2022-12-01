const Product = require("../models/products");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected :)");
});

const NikeArray = [
  new Product({
    name: "Nike Air Zoom 39",
    cat: "Sports",
    price: 509,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3774cbdd-3219-464d-bb83-5fc8bf665792/air-zoom-pegasus-39-shield-weatherised-road-running-shoes-Fp3SPv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3458edc2-0000-4e62-9ad3-fff5a46399bd/air-zoom-pegasus-39-shield-weatherised-road-running-shoes-Fp3SPv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7293a444-91e9-40b7-8990-e776932bb284/air-zoom-pegasus-39-shield-weatherised-road-running-shoes-Fp3SPv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ea8d47a7-df6d-439a-b3f7-a509dd486596/air-zoom-pegasus-39-shield-weatherised-road-running-shoes-Fp3SPv.png",
    ],
  }),
  new Product({
    name: "Nike Air Zoom Pegasus",
    cat: "Sports",
    price: 409,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d72512e5-7c88-4473-9263-1cabb53a6411/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/03cb3532-40b7-4bc3-ae40-2325098dcef5/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d6781257-4ced-47d2-a2e7-4749b294f33f/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/36c0fec7-7a27-4b44-a441-35fd7e0236e9/air-zoom-pegasus-39-road-running-shoes-fRzz2h.png",
    ],
  }),
  new Product({
    name: "Nike React Miler 3",
    cat: "Sports",
    price: 259.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/12478671-42b0-4d5c-a981-8200f468b52b/react-miler-3-road-running-shoes-1gSlRz.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1f7ef201-3486-4d68-afe4-631ec9a3cecd/react-miler-3-road-running-shoes-1gSlRz.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3eefc002-25fe-46a9-9a6b-7c6c25b0d807/react-miler-3-road-running-shoes-1gSlRz.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/a14fa2e1-933d-4686-abc4-c9c2e82481aa/react-miler-3-road-running-shoes-1gSlRz.png,",
    ],
  }),
  // Sports

  // Lifestyle
  new Product({
    name: "Nike Court Vision",
    cat: "Lifestyle",
    price: 309.9,
    bigDeal: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/027336ae-8467-44f1-9879-a616e9d421d1/court-vision-low-shoes-TGRtWS.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/afc8e411-ffd7-4c6d-b775-c52720b71628/court-vision-low-shoes-TGRtWS.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/14765f11-2122-4b60-97eb-986c8bcd3ca1/court-vision-low-shoes-TGRtWS.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fd197c2e-35d2-42a6-b459-dd5198891ca3/court-vision-low-shoes-TGRtWS.png",
    ],
  }),

  new Product({
    name: "Nike Blazer Mid",
    cat: "Lifestyle",
    price: 449.9,
    bigDeal: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eea83ac-7862-459e-abf5-2f566e2f0ac1/blazer-mid-77-vintage-shoes-CBDjT0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bc7d689-de2c-4b49-986c-b42153895bc0/blazer-mid-77-vintage-shoes-CBDjT0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef4dbed6-c621-4879-8db3-f87296bfb570/blazer-mid-77-vintage-shoes-CBDjT0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d9fe33e-9a31-4e7b-9d7c-c4ecf7abd2bb/blazer-mid-77-vintage-shoes-CBDjT0.png",
    ],
  }),
  new Product({
    name: "Nike x Stüssy",
    cat: "Lifestyle",
    price: 669.9,
    bigDeal: true,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c2fa3ef-b2be-49e4-9cd1-dd2727319693/stussy-air-force-1-07-mid-shoes-rmF9J6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af9145ab-bbef-4041-bc1f-f9dd23488ff7/stussy-air-force-1-07-mid-shoes-rmF9J6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/56575520-2dfb-4ea6-b141-f0a5e7df4224/stussy-air-force-1-07-mid-shoes-rmF9J6.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/928092cc-1ce7-4257-8828-baa79624e70f/stussy-air-force-1-07-mid-shoes-rmF9J6.png",
    ],
  }),
  // Lifestyle

  // Jordan
  new Product({
    name: "Air Jordan 1 Hi",
    cat: "Jordan",
    price: 729.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eeb63b14-f4fb-43e4-add0-848529f8a00d/air-jordan-1-hi-flyease-shoes-9mn2QK.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d4955af-ce4e-44a3-8b4c-c0302483edea/air-jordan-1-hi-flyease-shoes-9mn2QK.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aaea5406-643f-4dec-8068-e8e95e42f3aa/air-jordan-1-hi-flyease-shoes-9mn2QK.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/be7b9f53-d352-45a1-9d9e-9ae5af9946f8/air-jordan-1-hi-flyease-shoes-9mn2QK.png",
    ],
  }),
  new Product({
    name: "Air Jordan 1 Low",
    cat: "Jordan",
    price: 599.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0525e3bd-bfa5-42db-9eb0-3267d40b594a/air-jordan-1-low-flyease-easy-on-off-shoes-28LT69.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/53b5d811-4607-4cd2-b949-5f304765bde2/air-jordan-1-low-flyease-easy-on-off-shoes-28LT69.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/878aaad4-bee7-4c96-bce9-d628092525fc/air-jordan-1-low-flyease-easy-on-off-shoes-28LT69.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0773b017-b5ba-41ae-b1f1-45213d59ff2a/air-jordan-1-low-flyease-easy-on-off-shoes-28LT69.png",
    ],
  }),
  new Product({
    name: "Jordan Jumpman Pro",
    cat: "Jordan",
    price: 609.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19289000-5d9c-4d7f-8d92-388a383f4653/jordan-jumpman-pro-shoes-xf10xd.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/92fc38f0-9ad4-443d-9d04-ae3b2d62096b/jordan-jumpman-pro-shoes-xf10xd.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e84a3b3-7ca0-4fd8-941e-38888df3cb60/jordan-jumpman-pro-shoes-xf10xd.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd21dd46-22b5-4098-a229-f8f6db4dd507/jordan-jumpman-pro-shoes-xf10xd.png",
    ],
  }),
  // Jordan

  // Football
  new Product({
    // replace this one with a better images
    name: "Nike Mercurial",
    cat: "Football",
    price: 279.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/46421d41-7b7c-4b6a-acb2-dbab88868db2/mercurial-superfly-9-club-tf-football-shoes-B7c908.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/71130b2f-8acb-43a4-a866-a063aba3de72/mercurial-superfly-9-club-tf-football-shoes-B7c908.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81519b28-c857-4b12-ba9a-6f5b0b27fd87/mercurial-superfly-9-club-tf-football-shoes-B7c908.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/56adfde8-0dce-45b6-9af6-109d5d4f5175/mercurial-superfly-9-club-tf-football-shoes-B7c908.png",
    ],
  }),
  new Product({
    name: "Nike Zoom Mercurial",
    cat: "Football",
    price: 1049.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0b869242-10b5-4d72-b3e0-648013f871a9/zoom-mercurial-vapor-15-elite-fg-football-boot-Q9T8T0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9743f9d0-0223-465e-8c28-d58ceecbf19f/zoom-mercurial-vapor-15-elite-fg-football-boot-Q9T8T0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/598c239d-4e13-44d7-b484-ece98ca0b538/zoom-mercurial-vapor-15-elite-fg-football-boot-Q9T8T0.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4dbb44c8-3b3b-425e-813b-5bed9e578658/zoom-mercurial-vapor-15-elite-fg-football-boot-Q9T8T0.png",
    ],
  }),
  new Product({
    name: "Nike Tiempo Legend",
    cat: "Football",
    price: 929.9,
    images: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e39bcc7a-d4ce-4c1f-aca3-db3e83607dc3/tiempo-legend-9-elite-ag-pro-football-boot-9VZmF3.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5c035f79-744b-460d-8c65-29368087e0fe/tiempo-legend-9-elite-ag-pro-football-boot-9VZmF3.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f207f4df-ed31-4d41-9b9f-9104de535ec5/tiempo-legend-9-elite-ag-pro-football-boot-9VZmF3.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b4bd4f94-74fd-40e2-b166-d599dd0049f9/tiempo-legend-9-elite-ag-pro-football-boot-9VZmF3.png",
    ],
  }),

  // Football
];

NikeArray.map(async (product) => {
  await product.save((err, result) => {
    if (result) console.log("nike success :)");
    else console.log(err.message);
  });
});
