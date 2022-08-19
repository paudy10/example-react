const navLinks = [
    { id: 1, text: 'صفحه اصلی', link: '/', icon: 'fa fa-home ' },
    {
        id: 2,
        text: 'ارتباط با ما',
        link: '/contact',
        icon: 'fa fa-phone '
    },
    {
        id: 3,
        text: 'بلاگ',
        link: '/blog',
        icon: 'fa fa-book'
    },
    { id: 4, text: 'ثبت نام / ورود', link: '/login', icon: 'fa fa-sign-in'}
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
