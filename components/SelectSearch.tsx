import { useEffect } from "react";

import { taipeiCityZone } from "../constants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Props, useData } from "../context/DataContext";

const SelectSearch = () => {
  const { selectOption, setSelectOption, data, setDisplayData, getYoubikeData } = useData();

  const handleOnSelect = (value: string) => {
    if (value === selectOption) {
      setSelectOption('');
    } else {
      setSelectOption(value);
    }
  };

  const getDisplayData = async () => {
    let displayData: Props[] = [];
    if (!selectOption) {
      displayData = data;
    } else {
      displayData = data.filter((item: Props) => item.sarea === selectOption);
    }
    setDisplayData(displayData);
  };

  useEffect(() => {
    getYoubikeData()
    getDisplayData()
  }, [selectOption]);

  return (
    <Select
      value={selectOption}
      onValueChange={handleOnSelect}
      defaultValue={'xx區'}
    >
      <SelectTrigger className="bg-[#F6F6F6]">
        <SelectValue placeholder="選擇區域" className="text-[#AEAEAE]" />
      </SelectTrigger>
      <SelectContent>
        {taipeiCityZone.map((zone) => (
          <SelectItem key={zone.id} value={zone.title}>{zone.title}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectSearch