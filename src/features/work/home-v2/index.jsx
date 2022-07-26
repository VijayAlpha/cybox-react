import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WorkItem from '../work-item';

Work.propTypes = {
    data: PropTypes.array,
};

function Work(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'How we work',
        title: 'So what can MZOID do for you?',
        desc: 'Take technology to the next level with MZOID. The following are some alluring qualities that may entice you to handpick MZOID as your probably the most popular metaverse platform:',
        point: '●	Group chats with a customized avatar in an immersive virtual space – take advantage of the virtual space to communicate and share thoughts with tailor-made avatars'
    })
    return (
        <section className="tf-section how-we-work">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="tf-title st2 mb-60" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title m-b17">{dataBlock.title}</h4>
                            <p>{dataBlock.desc}</p>
                            <p>{dataBlock.point}</p>
                        </div>
                    
                    </div>

                    <div className="col-xl-7 col-md-12">
                        <div className="row pl-70">
                            {
                                data.map(item => (
                                    <div key={item.id} className="col-md-6">
                                        <WorkItem key={item.id} item={item} />
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

export default Work;