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
    }
];

const getuserLinks = () => {
    return [...userLinks];
};

export default getuserLinks;
