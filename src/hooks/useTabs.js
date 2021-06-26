import { useState } from 'react';

export default function useTabs(initialIndex, tabs) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  if (!tabs || !Array.isArray(tabs)) {
    return;
  }
  
  return { currentItem: tabs[currentIndex], changeItem: setCurrentIndex}
}
