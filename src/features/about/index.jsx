import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'About us',
            title: 'What is MZOID?',
            desc : 'Are you searching for a virtual environment that would allow you to educate, entertain, sell, and promote all your goals on a single platform? Then, welcome to the world of MZOID – A one-stop platform to connect, communicate, and convert all your real-world activities into virtual ones! MZOID is undoubtedly your finest choice if you want an immersive metaverse experience.'
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title st2">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p>{dataBlock.desc}</p>
                                <Button title="Know more" path='/about' />
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                            {
                                data.map(item => (
                                    <AboutItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;