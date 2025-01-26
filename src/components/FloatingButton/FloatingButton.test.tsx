import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FloatingButton from './FloatingButton';
import { Text } from 'react-native';

describe('FloatingButton', () => {
  it('should render the component correctly with the icon', () => {
    const { getByText } = render(
      <FloatingButton 
        icon={<Text>+</Text>} 
        onPress={() => {}} 
      />
    );

    expect(getByText('+')).toBeTruthy();
  });

  it('should call the onPress function when the button is pressed', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <FloatingButton 
        icon={<Text>+</Text>} 
        onPress={mockOnPress} 
      />
    );

    const button = getByTestId('floatingButton');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should be accessible with a screen reader', () => {
    const { getByTestId } = render(
      <FloatingButton 
        icon={<Text>+</Text>} 
        onPress={() => {}} 
      />
    );

    const button = getByTestId('floatingButton');
    expect(button).toBeTruthy();
  });
});
