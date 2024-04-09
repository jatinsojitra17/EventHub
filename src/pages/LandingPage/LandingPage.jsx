import React from "react";
import styles from "./LandingPage.module.css"; 
import CallToAction from "../../components/CallToAction/CallToAction";


function LandingPage() {
    return (
        // <div>
        //     <h1>Landing Page</h1>
        // </div>
        <main>
            <CallToAction />
            <section className={styles.LandingEventsSection}>
                <h1>Past Events</h1>
                <p>
                    Get a feeling of what's in store when you join!
                    There are a lot of various occasions gathered by different individuals.
                    Join today to find one you reverberate with.
                </p>
                <ul className={styles.LandingUI}>

                </ul>
            </section>
        </main>
    );
}

export default LandingPage;