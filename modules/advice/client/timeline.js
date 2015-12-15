Meteor.startup(() => {
    Meteor.subscribe('Advices');
});

function getTemporalAdvices() {
    return Collections.Advices.find({
        when: { '$exists': 1}
    }, {
        sort: { advice: 1 }
    })
    .map(advice => {
        const startDate = moment(advice.when).startOf('day');
        const endDate = moment(advice.when).endOf('day');

        return {
            type: 'point',
            content: advice.advice,
            title: advice.advice,
            start: startDate,
            end: endDate
        };
    });
}

Template.AdviceTimeline.onRendered(function() {
    const container = document.getElementById('advice-timeline');
    const timelineData = getTemporalAdvices();
    const options = {
        timeAxis: { scale: 'day', step: 1}
    };
    const timeline = new vis.Timeline(container, timelineData, options);
});
