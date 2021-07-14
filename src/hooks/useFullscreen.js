import { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  }
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      runCallback(true);
    }
  };

  const exitFullscreen = () => {
    if (!document.fullscreenElement
      && !document.mozFullscreenElement
      && !document.webkitFullscreenElement
      && !document.msFullscreenElement) return;
    
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    runCallback(false);
  };

  return { element, triggerFullscreen, exitFullscreen };
}

export default useFullscreen;