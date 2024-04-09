"use client"
import React, { Component } from 'react';
import Card from '@/components/card/Card'; 
import styles from './Events.module.css'; 

class Events extends Component {
    state = {
        events: [],
        error: null,
    };

    async componentDidMount() {
        try {
            const events = await this.getEvents();
            this.setState({ events });
        } catch (error) {
            console.error(error);
            this.setState({ error: "Une erreur s'est produite lors du fetching des événements." });
        }
    }

  
    getEvents = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/events', { cache: 'no-store' });
            if (!response.ok) throw new Error('Erreur lors du fetching des événements');
            const data = await response.json();
            return data.events; 
        } catch (error) {
            console.error("Error loading events: ", error);
            throw error; 
        }
    };

    render() {
        const { events, error } = this.state;

        return (
            <div className={styles.eventsContainer}>
                <video autoPlay muted loop className={styles.backgroundVideo}>
                    <source src="/gala6.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {error && <div className={styles.error}>{error}</div>}

                {events.map(event => (
                    <Card
                        key={event._id}
                        id={event._id}
                        title={event.title}
                        description={event.description}
                        img={`/events/${event.img}`}
                    />
                ))}
            </div>
        );
    }
}

export default Events;
