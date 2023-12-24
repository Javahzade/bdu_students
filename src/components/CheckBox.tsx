import React from 'react';
import {TouchableOpacity} from 'react-native';
import CheckSquareIcon from '../assets/icons/check-square.svg';
import SquareIcon from '../assets/icons/square.svg';

interface Props {
  checked: boolean;
  onPress: () => void;
}

export const CheckBox: React.FC<Props> = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {checked ? (
        <CheckSquareIcon width={24} height={24} />
      ) : (
        <SquareIcon width={24} height={24} />
      )}
    </TouchableOpacity>
  );
};
