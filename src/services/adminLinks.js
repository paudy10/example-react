const adminLinks = [
    {
        id: 1,
        text: 'بلاگ جدید',
        link: '/newblog',
        icon: 'fa fa-home '
    },
    {
        id: 2,
        text: 'لیست بلاگ ها',
        link: '/allblogs',
        icon: 'fa fa-book'
    },
    {
        id: 3,
        text: 'لیست کاربران',
        link: '/contact',
        icon: 'fa fa-phone '
    }
];

const getadminLinks = () => {
    return [...adminLinks];
};

export default getadminLinks;
