const userLinks = [

    {
        id: 0,
        text: 'داشبورد',
        link: '/dashboard',
        icon: 'fa fa-phone '
    },
    {
        id: 1,
        text: 'اَپ ساز',
        link: '/appsaz',
        icon: 'fa fa-home '
    },
    {
        id: 2,
        text: 'خرید اشتراک',
        link: '/prices',
        icon: 'fa fa-book'
    },
    {
        id: 3,
        text: 'بلاگ ها',
        link: '/blog',
        icon: 'fa fa-phone '
    },
    {
        id: 4,
        text: 'ارتباط با ما',
        link: '/contact',
        icon: 'fa fa-phone '
    }
];

const getuserLinks = () => {
    return [...userLinks];
};

export default getuserLinks;
