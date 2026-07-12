import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

interface ActiveDeskContextValue {
  requestedDeskId: string | null;
  requestId: number;
  requestDesk: (deskId: string) => void;
}

const ActiveDeskContext = createContext<ActiveDeskContextValue | undefined>(undefined);

export function ActiveDeskProvider({ children }: PropsWithChildren) {
  const [requestedDeskId, setRequestedDeskId] = useState<string | null>(null);
  const [requestId, setRequestId] = useState(0);

  const value = useMemo(
    () => ({
      requestedDeskId,
      requestId,
      requestDesk: (deskId: string) => {
        setRequestedDeskId(deskId);
        setRequestId((id) => id + 1);
      },
    }),
    [requestedDeskId, requestId]
  );

  return <ActiveDeskContext.Provider value={value}>{children}</ActiveDeskContext.Provider>;
}

export function useActiveDesk() {
  const context = useContext(ActiveDeskContext);
  if (!context) {
    throw new Error('useActiveDesk must be used within an ActiveDeskProvider');
  }
  return context;
}
