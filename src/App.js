import React, {Component} from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
    apiKey: '13473d242ca84681b29763a85fe850a1'
});

const particlesOptions = {
    particles: {
        number: {
            value: 350,
            density: {
                enable: true,
                value_area: 2000
            }
        }
    }
}

class App extends Component {

    state = {
        input: '',
        imageUrl: ''
    }

    handleInputChange = event => {
       this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input })

        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL,
                // URL
                this.state.input
            )
            .then(function(response) {
                    // do something with responseconsole.log(response);
                    console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
                },
                function(err) {
                    // there was an error}
                })
    }

    render() {
        return (
            <div className="App">
                <Particles className='particles'
                    params={particlesOptions}
                />
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm handleInputChange={this.handleInputChange} onButtonSubmit={this.onButtonSubmit} />
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        )
    }
}

export default App;
