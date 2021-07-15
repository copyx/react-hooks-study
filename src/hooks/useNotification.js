const useNotification = (title, options) => {
  // https://developer.mozilla.org/ko/docs/Web/API/notification
  
  if (!("Notification" in window)) {
    return;
  }

  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    }else {
        new Notification(title, options);
    }
  };
  return fireNotification;
};

export default useNotification;