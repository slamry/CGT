import AboutUs from './AboutUs';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        aboutUsPage: state.aboutUsPage
    }
}

const AboutUsContainer = connect(mapStateToProps)(AboutUs);

export default AboutUsContainer;