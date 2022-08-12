import kids from "./kids";

export const reports = [
    ...kids
];
export const disposition = ['Quiet', 'Friendly', 'Happy', 'Moody', 'Coperative', 'Teary', 'Sleepy', 'Grouchy', 'Chatty', 'Busy'];

let e = {
    userID: 1,
    date: '28/02/2022',
    created_at: '28/02/2022',
    updated_at: '28/02/2022',
    arrival: '2022-02-28T09:00:00+0800',
    departure: '2022-02-28T16:00:00+0800',
    naps: [
        {
            from: '2022-02-28T12:00:00+0800', 
            to: '2022-02-28T12:30:00+0800',
        },
        {
            from: '2022-02-28T14:00:00+0800', 
            to: '2022-02-28T15:55:00+0800',
        }
    ],
    toileting: [
        {
            time: '2022-02-28T09:40:00+0800', 
            type: 'W'
        },
        {
            time: '2022-02-28T14:00:00+0800', 
            type: 'BS'
        }
    ],
    disposition: ['Quiet', 'Friendly', 'Happy', 'Moody', 'Coperative', 'Teary', 'Sleepy', 'Grouchy', 'Chatty', 'Busy'],
    snacks: [
        {
            type: 'Okpa',
            time: '2022-02-28T14:00:00+0800'
        }
    ],
    meals: [
        {
            type: 'Cereal',
            time: '2022-02-28T14:30:00+0800'
        }
    ],
    feeding: '2022-02-28T14:30:00+0800',
    id: 1
}