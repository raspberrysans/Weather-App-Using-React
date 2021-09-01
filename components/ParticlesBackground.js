import React  from 'react';
import Particles from 'react-particles-js';
import particlesconfig from './particles-config';

export default function ParticlesBackground(){
    return (
        <Particles params={particlesconfig}/>
    );
}