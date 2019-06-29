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
import SignInForm from './components/SignInForm/SignInForm';
import Register from './components/Register/Register';

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
        imageUrl: '',
        box: {},
        route: 'signin'
    }

    calculateFaceLocation = data => {
        const face = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width, height);
        return {
            leftCol: face.left_col * width,
            topRow: face.top_row * height,
            rightCol: width - (face.right_col * width),
            bottomRow: height - (face.bottom_row * height)
        }
    }

    displayBox = box => {
        this.setState({box: box})
    }

    handleInputChange = event => {
        this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input})

        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL,
                // URL
                this.state.input
            )
            .then(response => {
                // do something with responseconsole.log(response);
                this.displayBox(this.calculateFaceLocation(response))
            })
            .catch(err => console.log(err))
    }

    handleRouteChange = (route) => {
        this.setState({route: route})
    }

    render() {
        return (
            <div className="App">
                <Particles className='particles'
                           params={particlesOptions}
                />
                <Navigation isSigned={this.state.route === 'signup'} onRouteChange={this.handleRouteChange} />
                {this.state.route === 'signup' ? <div>
                    <Logo/>
                    <Rank/>
                    <ImageLinkForm
                        handleInputChange={this.handleInputChange}
                        onButtonSubmit={this.onButtonSubmit}/>
                    <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
                </div>  : (this.state.route === 'signin' ? <SignInForm onRouteChange={this.handleRouteChange}/> :
                <Register onRouteChange={this.handleRouteChange} />)
                }
            </div>
        )
    }
}

export default App;
