import { useEffect, useState } from 'react';

export function useMswInit() {
  const [status, setStatus] = useState<'initializing' | 'ready'>(() =>
    process.env.NODE_ENV === 'development' ? 'initializing' : 'ready',
  );

  useEffect(() => {
    const enableMocking = async () => {
      if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        const { browserWorker } = await import('../browserWorker.js');
        await browserWorker.start({ onUnhandledRequest: 'bypass' });
        setStatus('ready');
      }
    };
    
    enableMocking();
  }, []);

  return status;
}
