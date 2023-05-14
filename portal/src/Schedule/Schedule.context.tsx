import React, { createContext, useEffect, useState } from 'react';

export interface TimeBlock {
   dataIndex: number;
   color: string;
   // size?: BlockSize;
}

export type Schedule = TimeBlock[];

interface ScheduleContextType {
   schedule: Schedule;
}

const DEFAULT_SCHEDULE: Schedule = Array.from({ length: 24 }, (_, i) => {
   return {
      dataIndex: i,
      color: 'white',
   };
});

export const ScheduleContext = createContext<ScheduleContextType>({
   schedule: DEFAULT_SCHEDULE,
});

const DEFAULT_URL = 'https://api.example.com/schedules';

export interface ScheduleProviderProps {
   children: React.ReactNode;
   config: Partial<{
      url?: string;
   }>;
}

export const ScheduleProvider: React.FC<ScheduleProviderProps> = (props: ScheduleProviderProps) => {
   const { children, config } = props;
   const { url } = config;
   const [schedule, setSchedule] = useState<Schedule>(DEFAULT_SCHEDULE);
   useEffect(() => {
      // Perform the data fetching logic here
      // Example: Fetch the schedules from an API
      const fetchSchedules = async () => {
         try {
            const response = await fetch(url || DEFAULT_URL);
            const data = await response.json();
            setSchedule(data);
         } catch (error) {
            console.error('Error fetching schedules:', error);
         }
      };

      fetchSchedules();
   }, []);

   // TODO: Schedule should be either context or non context import handled.
   return <ScheduleContext.Provider value={{ schedule }}>{children}</ScheduleContext.Provider>;
};
