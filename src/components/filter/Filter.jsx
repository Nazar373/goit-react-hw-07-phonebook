import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterState } from '../../redux/filterSlice';
import { Input, Label } from './Filter.styled';


const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    return dispatch(setFilterState(e.currentTarget.value))
  }
 return <Label>
  Find contacts by name
    <Input
      type="text"
      // value={value}
      onChange={onChangeFilter}
    ></Input>
  </Label>;
};

export default Filter;
