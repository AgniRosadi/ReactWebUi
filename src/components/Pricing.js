import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { eat, eat1 } from '../image'


function Pricing() {
    console.log(eat, eat1);
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <img src={eat} alt="eat" />
                                </div>
                                <h3>Telur Rebus</h3>
                                <h4>$16</h4>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Buy
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <img src={eat1} alt="eat" />
                                </div>
                                <h3>Salad</h3>
                                <h4>$29</h4>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Buy
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <img src={eat} alt="eat" />
                                </div>
                                <h3>Sendwitch</h3>
                                <h4>$99</h4>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Buy
                                </Button>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Pricing;