import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Tactivo Technologies` : 'Tactivo Technologies';
  }, [title]);
}

export default usePageTitle;
