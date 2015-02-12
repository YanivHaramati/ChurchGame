var religions = [
    {
        name: 'christianity',
        description: "Powerful, organized, well funded and with branches everywhere. Appeal is high, but so is taxation. You will have the backing of a large organization behind you to fuel your progress and guide you on your path. Occassionally you might be asked to obey the order.",
        appeal: 0.6,
        taxation: 0.7
    },
    {
        name: 'judaism',
        description: "Large organization that has survived for millenias. Low appeal but strong sense of community will guarantee guidance and assistance. You will occassionally be asked to assist yourself. Taxation is average.",
        appeal: 0.4,
        taxation: 0.5
    },
    {
        name: 'islam',
        description: "Large organization. Clever and ruthless, it wages an invisible war against all other religions. Taxation is low, and obedience is high. You will be expected to obey at all times, but your followers will die for your cause.",
        appeal: 0.4,
        taxation: 0.1
    },
    {
        name: 'hinduism',
        description: "Large organization that works by the principle of inclusion. All gods are welcome here. You will have strong appeal, low taxation, and average community support.",
        appeal: 0.5,
        taxation: 0.4
    },
    {
        name: 'buddhism',
        description: "Small organization. The less you will have the greater your appeal. Higher conversion value with non-believers and hipsters.",
        appeal: 0.7,
        taxation: 0.1
    },
    {
        name: 'independent',
        description: "You are free to define your own path. Your influence will be determined by your own actions but you will start with low appeal, no taxation but also no support.",
        appeal: 0.1,
        taxation: 0
    }
];

module.exports = {
     religions: religions
};