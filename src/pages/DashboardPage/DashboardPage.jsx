import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DashboardPage.module.css";


export default function DashboardPage({user}) {
    const [makeRsvp,setMakeRsvp] = useState(false);
    const navigate = useNavigate();

    return (
        <main className ={styles.dashboardPage}>
            <div className={styles.dashboardContainer}>
                <h1 className={styles.userName}>Welcome, {user.name.split(' ')[0]} 👋</h1>
                <button className={styles.btn}>Create Event</button>
            </div>
        </main>
    );
}