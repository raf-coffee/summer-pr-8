import { Container } from "react-bootstrap";
import styles from "./Description.module.css";

export function Description() {
  return (
    <Container>
      <div className={styles["desc-container"]}>
        <h2 className={styles["desc-title"]}>Фотосессия в вертолете</h2>
        <div className={styles["desc-video"]}>
          <div>
            <p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JFIpCSmLVhs?si=lrsO1If8XaCWvJsa"
                title="Puppy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: "0 0 0 0",
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
