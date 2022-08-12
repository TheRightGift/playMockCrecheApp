export const chats = [
    {
        userFrom: {
            name: 'Peter O.',
            id: 1
        },
        msg: 'Oh!',
        created_at: '28/09/2022',
        userTo: {
            name: 'Mary B.',
            id: 2
        },
    },
    {
        userFrom: {
            name: 'Peter O.',
            id: 1
        },
        msg: 'Oh!',
        created_at: '28/09/2022',
        userTo: {
            name: 'Mary B.',
            id: 2
        },
    }
];

export const users = [
    {
        name: 'Peter O.',
        id: 1,
        handler: 'Grade OOP',
        passport: '/assets/profile2.png',
        chats: [
            {
                userFrom: {
                    name: 'Peter O.',
                    id: 1,
                    passport: '/assets/profile2.png',
                },
                msg: 'Oh!',
                created_at: '28/09/2022',
                userTo: {
                    name: 'Mary B.',
                    id: 2,
                    passport: '/assets/profile1.png',
                },
            },
            {
                userFrom: {
                    name: 'Peter O.',
                    id: 1,
                    passport: '/assets/profile2.png',
                },
                msg: 'Oh Peter!',
                created_at: '28/09/2022',
                userTo: {
                    name: 'Mary B.',
                    id: 2,
                    passport: '/assets/profile1.png',
                },
            }
        ]
    },
    {
        name: 'Mary B.',
        id: 2,
        handler: 'Staff ES6',
        passport: '/assets/profile1.png',
        chats: [
            {
                userFrom: {
                    name: 'Peter O.',
                    id: 1,
                    passport: '/assets/profile2.png',
                },
                msg: 'Oh Gauis!',
                created_at: '28/09/2022',
                userTo: {
                    name: 'Mary B.',
                    id: 2,
                    passport: '/assets/profile1.png',
                },
            },
            {
                userFrom: {
                    name: 'Peter O.',
                    id: 1,
                    passport: '/assets/profile2.png',
                },
                msg: 'Oh Mendy!',
                created_at: '28/09/2022',
                userTo: {
                    name: 'Mary B.',
                    id: 2,
                    passport: '/assets/profile1.png',
                },
            }
        ]
    },
    {
        name: 'Osagie P O',
        id: 3,
        handler: 'Gradler',
        passport: '/assets/profile3.png',
        chats: []
    }
]