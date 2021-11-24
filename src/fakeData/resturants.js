var faker = require("faker");

let resturants = {
  data: [
    {
      name: "Yes Coffee",
      rating: "4.5",
      type: "Không gian yên tĩnh",
      time: "10:00am",
      rate: "75",
      id: "123",
      imgSrc:
        "https://www.langf.vn/cam-nang-lang-dai-hoc/wp-content/uploads/2020/11/P3.png"
    },
    {
      name: "The Sun Coffee & Tea",
      rating: "4.0",
      type: "Món ăn đẹp mắt",
      time: "11:00am",
      rate: "100",
      id: "456",
      imgSrc:
        "https://www.langf.vn/cam-nang-lang-dai-hoc/wp-content/uploads/2020/11/P6.png"
    }
  ]
};
let resturantsDetail = {
  data: [
    {
      name: "Giang Nam Coffee",
      rating: 4.5,
      reviews: "75",
      type: "Không gian yên tĩnh",
      deliveryCharges: 50,
      address: "",
      img:
        "https://www.langf.vn/cam-nang-lang-dai-hoc/wp-content/uploads/2020/11/P9.png",
      shortDesc:
        "In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",
      deliveryTime: "10 phút",
      rate: "75",
      id: "123",
      detailReviews: [
        {
          name: "Người dùng 1",
          review: "Quán đẹp, món ngon, wifi mạnh.",
          rating: 4
        },
        {
          name: "Người dùng 2",
          review: "Cafe sữa ngon tuyệt",
          rating: 3
        }
      ],
      imgSrc: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      foodItems: [
        {
          type: "Thức uống",
          list: [
            {
              name: "Trà chanh",
              price: "15.000",
              type: "non-veg",
              imgSrc:
                "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            },
            {
              name: "Cafe sữa",
              price: "20.000",
              type: "veg",
              imgSrc:
                "https://media.istockphoto.com/photos/coffee-cup-picture-id1126871442?b=1&k=20&m=1126871442&s=170667a&w=0&h=nvyb_jfNi2mFxg2uereLgsUz6krh9-S4gnupr8j2AxA="
            },
            {
              name: "Trà đào",
              price: "25.000",
              type: "veg",
              imgSrc:
                "https://images.unsplash.com/photo-1596507275836-bc5fe58bfd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
          ]
        },
        {
          type: "Món ăn",
          list: [
            {
              name: "Mì Ý",
              price: "35.000",
              type: "non-veg",
              imgSrc:
                "https://media.istockphoto.com/photos/spaghetti-with-large-meatballs-picture-id482728309?b=1&k=20&m=482728309&s=170667a&w=0&h=4yN62gfdSLpYz0TghKwafXc9GuEISVrh7FrQsBEEZVQ="
            },
            {
              name: "Pizza",
              price: "50.000",
              type: "veg",
              imgSrc:
                "https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4="
            }
          ]
        }
      ]
    },
    {
      name: "The Sun Coffee & Tea", // -------------
      rating: 4.0, // -----------------
      reviews: "400", // ------------
      type: "Không gian rộng", // -------------
      deliveryCharges: 50, // ----------
      address: "Resturant Address goes here", // ----
      // --------
      img:
        "https://www.langf.vn/cam-nang-lang-dai-hoc/wp-content/uploads/2020/11/P6.png",
      shortDesc:
        "In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",

      deliveryTime: "45 phút",
      rate: "100",
      id: "456", // ---------------------------
      detailReviews: [
        {
          name: "Người dùng 1",
          review: "Quán đẹp, món ngon, wifi mạnh.",
          rating: 4
        },
        {
          name: "Người dùng 2",
          review: "Cafe sữa ngon tuyệt",
          rating: 3
        }
      ],
      imgSrc: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      foodItems: [
        {
          type: "Thức uống",
          list: [
            {
              name: "Trà chanh",
              price: "15.000",
              type: "non-veg",
              imgSrc:
                "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            },
            {
              name: "Cafe sữa",
              price: "20.000",
              type: "veg",
              imgSrc:
                "https://media.istockphoto.com/photos/coffee-cup-picture-id1126871442?b=1&k=20&m=1126871442&s=170667a&w=0&h=nvyb_jfNi2mFxg2uereLgsUz6krh9-S4gnupr8j2AxA="
            },
            {
              name: "Trà đào",
              price: "25.000",
              type: "veg",
              imgSrc:
                "https://images.unsplash.com/photo-1596507275836-bc5fe58bfd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
          ]
        },
        {
          type: "Món ăn",
          list: [
            {
              name: "Mì Ý",
              price: "35.000",
              type: "non-veg",
              imgSrc:
                "https://media.istockphoto.com/photos/spaghetti-with-large-meatballs-picture-id482728309?b=1&k=20&m=482728309&s=170667a&w=0&h=4yN62gfdSLpYz0TghKwafXc9GuEISVrh7FrQsBEEZVQ="
            },
            {
              name: "Pizza",
              price: "50.000",
              type: "veg",
              imgSrc:
                "https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4="
            }
          ]
        }
      ]
    }
  ]
};
for (let i = 0; i < 24; i++) {
  let id = faker.datatype.uuid();
  let name = faker.name.firstName()+" Coffee";
  let rating = faker.datatype.float({min: 3, max: 5, precision: 0.1});
  // let imgSrc = "https://source.unsplash.com/1600x900/?food,random";
  let imgSrc = "https://picsum.photos/1600/900?random=" + i;  /// random ẢNh
  resturants.data.push({
    name: name,
    rating: rating,
    type: "Không gian ấm áp",
    time: "11:00am",
    rate: faker.datatype.number(1000),
    id: id,
    imgSrc: imgSrc
  });
  resturantsDetail.data.push({
    id: id,
    name: name,
    rating: rating,
    type: "Wifi mạnh",
    reviews: faker.datatype.number(500),
    deliveryCharges: faker.datatype.number(500),
    address: faker.address.streetAddress(),
    img: "https://source.unsplash.com/1600x900/?resturant",
    shortDesc:
      "In the coffee shop we are as awkward lovers, pretending to be there of convenience, afraid of our need to connect to one another. This place filled with people always so close and so far apart... this is the community of our era... as close as we can be without admitting the truth.",
    deliveryTime: "45 phút",
    rate: faker.datatype.number(500),
    detailReviews: [
      {
        name: "Người dùng 1",
        review: "Quán đẹp, món ngon, wifi mạnh.",
        rating: 4
      },
      {
        name: "Người dùng 2",
        review: "Cafe sữa ngon tuyệt",
        rating: 3
      }
    ],
    imgSrc: [
      "https://source.unsplash.com/1600x900/?food",
      "https://source.unsplash.com/1600x900/?resturant",
      "https://source.unsplash.com/1600x900/?cafe"
    ],
    foodItems: [
      {
        type: "Thức uống",
        list: [
          {
            name: "Trà chanh",
            price: "15.000",
            type: "non-veg",
            imgSrc:
              "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          },
          {
            name: "Cafe sữa",
            price: "20.000",
            type: "veg",
            imgSrc:
              "https://media.istockphoto.com/photos/coffee-cup-picture-id1126871442?b=1&k=20&m=1126871442&s=170667a&w=0&h=nvyb_jfNi2mFxg2uereLgsUz6krh9-S4gnupr8j2AxA="
          },
          {
            name: "Trà đào",
            price: "25.000",
            type: "veg",
            imgSrc:
              "https://images.unsplash.com/photo-1596507275836-bc5fe58bfd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
        ]
      },
      {
        type: "Món ăn",
        list: [
          {
            name: "Mì Ý",
            price: "35.000",
            type: "non-veg",
            imgSrc:
              "https://media.istockphoto.com/photos/spaghetti-with-large-meatballs-picture-id482728309?b=1&k=20&m=482728309&s=170667a&w=0&h=4yN62gfdSLpYz0TghKwafXc9GuEISVrh7FrQsBEEZVQ="
          },
          {
            name: "Pizza",
            price: "50.000",
            type: "veg",
            imgSrc:
              "https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4="
          }
        ]
      }
    ]
  });
}
// console.log(resturants.data);
// let  = {
// console.log(resturantsDetail);

export default { resturants, resturantsDetail };
