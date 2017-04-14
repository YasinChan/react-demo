import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  '*::after': {
    'boxSizing': 'border-box'
  },
  '*::before': {
    'boxSizing': 'border-box'
  },
  'ul': {
    'listStyle': 'none'
  },
  'ol': {
    'listStyle': 'none'
  },
  'dl': {
    'listStyle': 'none'
  },
  'a': {
    'color': 'inherit'
  }
});
