import './template/timeline.html'

Meteor.startup(() => {
    Meteor.subscribe('Advices');
});

function getTemporalAdvices() {
    //TODO adicionar eventos de idade, caso soubermos a idade (calcular o evento futuro... data de nascimento + idade desejada)
    return Collections.Advices.find({
        'when.type': 'specific-date'
    }, {
        sort: { 'when.value': 1 }
    })
    .map(advice => {
        const startDate = moment(advice.when.value).startOf('day');

        return {
            type: 'point',
            content: advice.advice,
            title: advice.advice,
            start: startDate
        };
    });
}

Template.AdviceTimeline.onRendered(() => {
    const container = document.getElementById('advice-timeline');
    const timelineData = getTemporalAdvices();
    const options = {
        timeAxis: { scale: 'day', step: 1 }
    };
    const timeline = new vis.Timeline(container, timelineData, options);
});
