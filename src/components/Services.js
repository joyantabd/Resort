import React, { Component } from 'react';
import Title from './Title';
import {FaBeer, FaCocktail,FaHiking,FaShuttleVan} from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info:'Lorem ipsum dolar sit amet consectetur adipisicing elit'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hicking',
                info:'Lorem ipsum dolar sit amet consectetur adipisicing elit'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info:'Lorem ipsum dolar sit amet consectetur adipisicing elit'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info:'Lorem ipsum dolar sit amet consectetur adipisicing elit'
            }
        ]
    }
    render() {
        return (

            <section className='services'>
                <Title title='services' />
                
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services; 