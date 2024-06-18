import { MeetingPointDesktop } from "../MeetingPointDesktop/MeetingPointDesktop";

export function Map() {
  return (
    <div className="relative">
      <MeetingPointDesktop />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A22a0c951555e152cc3cedd90bd96088089c67bd237d44ce8cb85fff94a388312&amp;source=constructor"
        width="100%"
        height="423"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
