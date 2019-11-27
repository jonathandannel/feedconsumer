import { createElement as h, useEffect, useState } from "react";
import {
  addDateToProperty,
  queryProperties,
  sortByAlphaAddress
} from "./helpers";
import PropertyFeed from "./components/PropertyFeed";

const App = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [additionalProperties, setAdditionalProperties] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [boundary, setBoundary] = useState(10);

  const getPropertiesWithDate = () =>
    queryProperties().then(({ properties }) =>
      properties.map(addDateToProperty)
    );

  const getAdditionalProperties = () => {
    if (allProperties.length > 10) {
      if (allProperties.length < boundary - activeIndex + 10) {
        return;
      }
      const slice = allProperties.slice(activeIndex, boundary);
      setAdditionalProperties([...slice, ...additionalProperties]);
      setActiveIndex(activeIndex + 10);
      setBoundary(boundary + 10);
    }
  };

  useEffect(() => {
    if (!allProperties.length) {
      getPropertiesWithDate().then(p => {
        setAllProperties(sortByAlphaAddress(p));
      });
    }

    const fetchInterval = setInterval(() => {
      setLoading(true);
      getPropertiesWithDate().then(p => {
        setAllProperties(allProperties.concat(sortByAlphaAddress(p)));
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      });
    }, 5000);
    return () => clearInterval(fetchInterval);
  }, [allProperties, setLoading]);

  return h(PropertyFeed, {
    allProperties,
    loading,
    additionalProperties,
    activeIndex,
    getAdditionalProperties
  });
};

export default App;
