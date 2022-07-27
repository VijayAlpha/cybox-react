import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

TeamItem.propTypes = {
  item: PropTypes.object,  
};

function TeamItem(props) {
    const {item} = props;
    return (
        <div className="team-box">
            <div className="image">
                <img src={item.img} alt="Crybox" />
            </div>
            <div className="content">
                <div className="h8"><a href="/team-details">{item.name}</a></div>
                <p>{item.position}</p>
                <ul className="social">
                    {
                        item.listsocial.map(icon => (
                            <li key={icon.id}>
                                <a href={icon.link} rel="noreferrer" target="_blank"><i className={icon.icon}></i></a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default TeamItem;