import React from 'react';
import Slider from '../components/slider/home-v2';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about';
import dataAbout from '../assets/fake-data/data-about';
import Vision from '../features/vision';
import RoadMap from '../features/roadmap/home-v2';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work/home-v2';
import dataWork from '../assets/fake-data/data-work';
import dataTeam from '../assets/fake-data/data-team';
import Team from '../features/team/home-v2';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import FAQ from '../features/faq/home-v2';
import dataFaq from '../assets/fake-data/data-faq';


function HomeTwo(props) {
    return (
        <div className='home-2'>
            <Slider data={dataSlider} />

            <About data={dataAbout} />

            <Vision data={dataAbout} />

            <Work data={dataWork} />

            <RoadMap data={dataRoadmap} />
            
            <Team data={dataTeam} />

            <Partner data={dataPartner} />

            <FAQ data={dataFaq} />
        </div>
    );
}

export default HomeTwo;