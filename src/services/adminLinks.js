const adminLinks = [

    {
        id: 0,
        text: 'داشبورد',
        link: '/admin/dashboard',
        icon: 'fa fa-phone '
    },
    {
        id: 1,
        text: 'بلاگ جدید',
        link: '/admin/newblog',
        icon: 'fa fa-home '
    },
    {
        id: 2,
        text: 'لیست بلاگ ها',
        link: '/admin/bloglist',
        icon: 'fa fa-book'
    },
    {
        id: 3,
        text: 'لیست کاربران',
        link: '/admin/allusers',
        icon: 'fa fa-phone '
    },
    {
        id: 4,
        text: 'پیام ها',
        link: '/admin/contactpm',
        icon: 'fa fa-phone '
    }
];

const getadminLinks = () => {
    return [...adminLinks];
};

export default getadminLinks;
