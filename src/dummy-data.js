const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/67248626_346350186304601_6715901285419188224_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=knDeVfZyZmEAX_f8JX8&oh=c04ae5f2798f982b96e7cd7e141aeddd&oe=5E8242C8',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just delicious coffees to offer at our shops!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "gongchatea",
        thumbnailUrl: 'data:image/png;base64,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',
        imageUrl: 'https://eatbook.sg/wp-content/uploads/2019/04/Free-Gong-Cha-Brown-Sugar-Establishment.jpg',
        likes: 660,
        timestamp: "October 5th 2019, 08:50:16 am",
        comments: [
            {
                username: "gongchatea",
                text: "PEABODY, MA - We have some exciting news… our new store in Northshore Mall is now open! Make sure you stop by to get your boba on newstore bobatime ⠀"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            }
        ]
    }
];

export default dummyData;
