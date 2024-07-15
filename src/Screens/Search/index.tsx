import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect, useState, version} from 'react';
import {GST, Typography, verticalScale} from '../../services/theme';
import AppText from '../../components/AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppButton from '../../components/AppButton';
import ProductList from '../../components/ProductList';
const Search = () => {
  const [openFilter, setOpenFilter] = useState(true);
  const [searchBy, setSearchBy] = useState({key: '', value: ''});
  const [searchResult, setSearchResult] = useState(DATA);

  function searchEmployees(key, value) {
    const searchValue = value.toString().toLowerCase();
    return DATA.filter(employee => {
      const propValue = employee[key].toString().toLowerCase();
      if (key === 'id') {
        return propValue === searchValue;
      }
      return propValue.includes(searchValue);
    });
  }
  const handelSearch = () => {
    if (searchBy.key != '' || searchBy.value != '') {
      const res: any = searchEmployees(searchBy.key, searchBy.value);
      setSearchResult(res);
      console.log(res);
    }
  };

  return (
    <View style={{flex: 1, ...GST.SCREEN_PADDING, backgroundColor: 'white'}}>
      <AppText title={'Search only one at a time'} />
      <View style={{marginVertical: verticalScale(16)}}>
        <TouchableOpacity
          onPress={() => setOpenFilter(!openFilter)}
          style={{...GST.mid_row}}>
          <AppText
            title={'Filter'}
            size={Typography.FONTS.SIZE.MEDIUM}
            bold={true}
          />
          <AntDesign
            name={openFilter ? 'upcircleo' : 'downcircleo'}
            color={'black'}
            size={24}
          />
        </TouchableOpacity>
        {openFilter && (
          <View style={{}}>
            <FilterLine
              title={'Search By Id'}
              placeholder={'1'}
              onChangeText={text => {
                setSearchBy({key: 'id', value: text});
              }}
            />
            <FilterLine
              title={'Search By name'}
              placeholder={'Tiger'}
              onChangeText={text => {
                setSearchBy({key: 'employee_name', value: text});
              }}
            />
            <FilterLine
              title={'Search By age'}
              placeholder={'10'}
              onChangeText={text => {
                setSearchBy({key: 'employee_age', value: text});
              }}
            />
            <FilterLine
              title={'Search By salary'}
              placeholder={'1000'}
              onChangeText={text => {
                setSearchBy({key: 'employee_salary', value: text});
              }}
            />
          </View>
        )}
      </View>
      {openFilter && <AppButton onPress={handelSearch} title={'Search'} />}
      <View style={{marginVertical: verticalScale(8)}} />
      <ProductList list={searchResult} />
    </View>
  );
};

export default Search;

const FilterLine = ({title, placeholder, onChangeText}: any) => {
  return (
    <View style={{marginBottom: verticalScale(8)}}>
      <AppText title={title} />
      <TextInput
        style={{borderWidth: 1}}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};
const DATA = [
  {
    id: 1,
    employee_name: 'Tiger Nixon',
    employee_salary: 320800,
    employee_age: 61,
    profile_image: '',
  },
  {
    id: 2,
    employee_name: 'Garrett Winters',
    employee_salary: 170750,
    employee_age: 63,
    profile_image: '',
  },
  {
    id: 3,
    employee_name: 'Ashton Cox',
    employee_salary: 86000,
    employee_age: 66,
    profile_image: '',
  },
  {
    id: 4,
    employee_name: 'Cedric Kelly',
    employee_salary: 433060,
    employee_age: 22,
    profile_image: '',
  },
  {
    id: 5,
    employee_name: 'Airi Satou',
    employee_salary: 162700,
    employee_age: 33,
    profile_image: '',
  },
  {
    id: 6,
    employee_name: 'Brielle Williamson',
    employee_salary: 372000,
    employee_age: 61,
    profile_image: '',
  },
  {
    id: 7,
    employee_name: 'Herrod Chandler',
    employee_salary: 137500,
    employee_age: 59,
    profile_image: '',
  },
  {
    id: 8,
    employee_name: 'Rhona Davidson',
    employee_salary: 327900,
    employee_age: 55,
    profile_image: '',
  },
  {
    id: 9,
    employee_name: 'Colleen Hurst',
    employee_salary: 205500,
    employee_age: 39,
    profile_image: '',
  },
  {
    id: 10,
    employee_name: 'Sonya Frost',
    employee_salary: 103600,
    employee_age: 23,
    profile_image: '',
  },
  {
    id: 11,
    employee_name: 'Jena Gaines',
    employee_salary: 90560,
    employee_age: 30,
    profile_image: '',
  },
  {
    id: 12,
    employee_name: 'Quinn Flynn',
    employee_salary: 342000,
    employee_age: 22,
    profile_image: '',
  },
  {
    id: 13,
    employee_name: 'Charde Marshall',
    employee_salary: 470600,
    employee_age: 36,
    profile_image: '',
  },
  {
    id: 14,
    employee_name: 'Haley Kennedy',
    employee_salary: 313500,
    employee_age: 43,
    profile_image: '',
  },
  {
    id: 15,
    employee_name: 'Tatyana Fitzpatrick',
    employee_salary: 385750,
    employee_age: 19,
    profile_image: '',
  },
  {
    id: 16,
    employee_name: 'Michael Silva',
    employee_salary: 198500,
    employee_age: 66,
    profile_image: '',
  },
  {
    id: 17,
    employee_name: 'Paul Byrd',
    employee_salary: 725000,
    employee_age: 64,
    profile_image: '',
  },
  {
    id: 18,
    employee_name: 'Gloria Little',
    employee_salary: 237500,
    employee_age: 59,
    profile_image: '',
  },
  {
    id: 19,
    employee_name: 'Bradley Greer',
    employee_salary: 132000,
    employee_age: 41,
    profile_image: '',
  },
  {
    id: 20,
    employee_name: 'Dai Rios',
    employee_salary: 217500,
    employee_age: 35,
    profile_image: '',
  },
  {
    id: 21,
    employee_name: 'Jenette Caldwell',
    employee_salary: 345000,
    employee_age: 30,
    profile_image: '',
  },
  {
    id: 22,
    employee_name: 'Yuri Berry',
    employee_salary: 675000,
    employee_age: 40,
    profile_image: '',
  },
  {
    id: 23,
    employee_name: 'Caesar Vance',
    employee_salary: 106450,
    employee_age: 21,
    profile_image: '',
  },
  {
    id: 24,
    employee_name: 'Doris Wilder',
    employee_salary: 85600,
    employee_age: 23,
    profile_image: '',
  },
];
