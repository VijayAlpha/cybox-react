import React from 'react';
import PropTypes from 'prop-types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'

Partner.propTypes = {
    data: PropTypes.array,
};

function Partner(props) {

    const {data} = props;

    return (
        <section className="tf-section partner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">partners</p>
                            <h4 className="title">MZOID PARTNERS</h4>
                        </div>
                    </div>
                    <div className="col-md-12 center-div">
                        <div className="item-partner" data-aos="fade-up" data-aos-duration="800">
                                {
                                    data.map((item,idx) => (
                                            <div className="image">
                                                <img src={item.img} alt="Crybox" />
                                            </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;