import { Player } from "../Player/Player";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./bar.module.css";

export const Bar = () => {
    return (
        <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress} />
          <div className={styles.barPlayerBlock}>
            <div className={styles.barBlayer}>
            <Player/>
            <TrackPlay/>
            </div>
            <Volume/>
          </div>
        </div>
      </div>
    );
}