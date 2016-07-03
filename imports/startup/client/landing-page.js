import './templates/landing-layout.html'
import './templates/landing-home.html'

Template.LandingHome.helpers({
    getLaunchGatheringCollection() {
        return Collections.LaunchGathering;
    }
});
