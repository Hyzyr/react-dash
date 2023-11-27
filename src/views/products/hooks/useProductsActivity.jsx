import React, { useEffect, useState } from "react";

const useProductsActivity = ({ data }) => {
  const [isUpdated, setUpdated] = useState(false);
  const [state, setState] = useState([]);
  const [updates, setUpdates] = useState([]);

  const resetState = () => {
    setUpdates([]);
    setUpdated(false);
  };

  // add to updates arrayy or rewrite if exists
  const addToUpdates = (data) => {
    setUpdates((oldState) => {
      let newState = [...oldState];
      let isExists;
      newState.map((item) => {
        if (item.id === data.id) isExists = true;
        return item.id !== data.id ? item : data;
      });
      if (!isExists) newState.push(data);
      return newState;
    });
    /// show save button
    if (!isUpdated) setUpdated(true);
  };
  const updateData = (data) => {
    setState((oldState) => {
      let newState = [...oldState];
      return newState.map((item) => (item.id !== data.id ? item : data));
    });
    addToUpdates(data);
  };

  useEffect(() => {
    setState([...data]);
    resetState();
  }, [data]);

  return {
    data: state,
    updates,
    isUpdated,
    updateData,
    setUpdated,
    resetState
  };
};

export default useProductsActivity;
