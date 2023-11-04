import { taipeiCityZone } from "../constants";
import { useData } from "../context/DataContext";

const CheckSearch = () => {
  const { checkOptions, setCheckOptions, data, setDisplayData } = useData();

  const handleCheckboxChange = (item: string) => {
    const updatedCheckOptions = [...checkOptions];
    const index = updatedCheckOptions.indexOf(item);

    if (index === -1) {
      updatedCheckOptions.push(item);
    } else {
      updatedCheckOptions.splice(index, 1);
    }

    setCheckOptions(updatedCheckOptions);
    const displayData = data.filter((item) => updatedCheckOptions.includes(item.sarea));
    setDisplayData(displayData);
  };

  const handleAllCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      const allItems = taipeiCityZone.map((item) => item.title);
      setCheckOptions(allItems);
      setDisplayData(data);
    } else {
      setCheckOptions([]);
      setDisplayData([]);
    }
  };

  return (<>
    <div className="flex space-x-3 pb-5">
      <input
        type="checkbox"
        id='all'
        name='all'
        value='all'
        checked={checkOptions.length === taipeiCityZone.length}
        onChange={(e) => handleAllCheckboxChange(e.target.checked)}
      />
      <label htmlFor='all'>全部勾選</label>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {taipeiCityZone.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`${item.id}-${index}`}
            name={item.title}
            value={item.title}
            checked={checkOptions.includes(item.title)}
            onChange={() => handleCheckboxChange(item.title)}
            className="mr-2"
          />
          <label htmlFor={`${item.id}-${index}`}>{item.title}</label>
        </div>
      ))}
    </div>
  </>
  )
}

export default CheckSearch