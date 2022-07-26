import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
// import AboutItem from '../about-item';

Vision.propTypes = {
    data : PropTypes.array,
};

function Vision(props) {


    const [dataBlock] = useState(
        {
            subtitle : 'Vision',
            title: 'Future with MZOID',
            desc : 'The goal of MZOID’s is to establish a metaverse, a global platform where everyone may quickly build their own identity with their innovative thought process. In other words, Our goal is to build a fully immersive social networking site in the metaverse where individuals may establish their virtual properties like lands, businesses, stores, and events. '
        }
    )

    return (
        <section className="tf-section tf-about style2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-about" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p>{dataBlock.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vision;