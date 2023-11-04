"use client";
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

import { toast } from '../components/ui/use-toast';

export type Props = {
  sarea: string,
  sna: string,
  sbi: number,
  bemp: number,
}

interface DataContextType {
  data: Props[];
  setData: React.Dispatch<React.SetStateAction<Props[]>>;
  selectOption: string,
  setSelectOption: React.Dispatch<React.SetStateAction<string>>;
  checkOptions: string[],
  setCheckOptions: React.Dispatch<React.SetStateAction<string[]>>;
  display: Props[];
  setDisplayData: React.Dispatch<React.SetStateAction<Props[]>>;
  getYoubikeData: () => Promise<void>;
}

const defaultValue: Props[] = [{ sarea: '', sna: '', sbi: 0, bemp: 0 }];

const DataContext = createContext<DataContextType>({
  data: defaultValue,
  setData: () => { },
  selectOption: '',
  setSelectOption: () => { },
  checkOptions: [],
  setCheckOptions: () => { },
  display: [],
  setDisplayData: () => { },
  getYoubikeData: async () => { },
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Props[]>([]);
  const [display, setDisplayData] = useState<Props[]>([]);
  const [selectOption, setSelectOption] = useState<string>('');
  const [checkOptions, setCheckOptions] = useState<string[]>([]);

  async function getYoubikeData() {
    const result = await axios.get('/api/youbike');
    if (result.status !== 200) {
      toast({
        title: "拿取政府資料失敗",
        description: "聯絡開發人員",
      })
    }
    setData(result.data);
  }

  return (<>
    <DataContext.Provider value={{
      data,
      setData,
      selectOption,
      setSelectOption,
      checkOptions,
      setCheckOptions,
      display,
      setDisplayData,
      getYoubikeData
    }}>
      {children}
    </DataContext.Provider>
  </>);
}

export function useData() {
  return useContext(DataContext);
}
