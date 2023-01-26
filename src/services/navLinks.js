const navLinks = [
    { id: 1, text: 'صفحه اصلی', link: '/', icon: 'fa fa-home ' },

    {
        id: 3,
        text: 'محصولات',
        link: '/shop',
        icon: 'fa fa-book'
    },
    {
        id: 2,
        text: 'ارتباط با ما',
        link: '/contact',
        icon: 'fa fa-phone '
    },
    { id: 4, text: 'ثبت نام / ورود', link: '/login', icon: 'fa fa-sign-in' }
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
