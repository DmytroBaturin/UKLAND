import styles from "./index.module.scss";
export const Video = () => {
  function resizeIframe(obj) {
    obj.style.height = 0;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + "px";
  }
  return (
    <div className={styles.root}>
      <iframe
        src="https://www.youtube.com/embed/YayLyqk1AO8?si=m6f0EsVUv6zJFPls"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope ;picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
