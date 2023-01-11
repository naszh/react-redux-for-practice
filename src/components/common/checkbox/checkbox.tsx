import { useContext } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import { ThemeContext } from '../../theme/themeProvider';

import {
  CheckboxStyleLight,
  CheckboxStyleDark,
  FormControlLabelDark,
  FormControlLabelLight,
} from './checkbox.styles';

interface CheckElementProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const CheckElement = ({
  checked,
  onChange,
  label,
}: CheckElementProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={theme === 'light' ? CheckboxStyleLight : CheckboxStyleDark}
            checked={checked}
            onChange={onChange}
          />
        }
        label={label}
        sx={theme === 'light' ? FormControlLabelLight : FormControlLabelDark}
      />
    </FormGroup>
  );
};
