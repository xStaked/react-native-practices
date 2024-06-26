import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#7037eb',
  seconary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#ffba08',
  danger: '#ff5252',
  dark: '#22223b',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.background,
    fontSize: 18,
  },
});
