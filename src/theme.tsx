import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundMain: {
    flex: 1,
    backgroundColor: 'midnightblue',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  results: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
  },
  resultHistory: {
    fontSize: 30,
    color: 'rgba(255,255,255, 0.5)',
    textAlign: 'right',
  },
  buttonLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
