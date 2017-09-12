(function () {
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];

    const threePlusLangUsers = users.filter(user => user.languages.length >= 3);
    const userEmails = users.map(({email}) => email);
    const usersById = users.reduce((usersObj, user) => {
        usersObj[user.id] = user;
        return usersObj;
    }, {});

    console.log(threePlusLangUsers);
    console.log(userEmails);
    console.log(usersById);
})();