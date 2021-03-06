import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import cn from "classnames";

export default function SoCFM() {
  return (
    <GridItem
      color={"#e3d7d4"}
      fontColor={"#2e465c"}
      title={"SoC FM"}
      underline
      animate
      grow
    >
      <p
        className={cn(styles.gridItemText, styles.animateText)}
        style={{ color: "#2e465c" }}
      >
        A Playlist app created in a single-day Hackathon at the School of Code
        using the Spotify API. The brief outlined 'To create a web experience
        using data from an API'.
      </p>
    </GridItem>
  );
}
