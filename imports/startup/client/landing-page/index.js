import './landing-layout.html'
import './landing-home.html'

Template.LandingHome.helpers({
    getLaunchGatheringCollection: () => Collections.LaunchGathering
});
