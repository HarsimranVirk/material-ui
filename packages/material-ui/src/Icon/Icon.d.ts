import * as React from 'react';
import { PropTypes } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export interface IconTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & {
    color?: PropTypes.Color | 'action' | 'disabled' | 'error';
    fontSize?: 'inherit' | 'default' | 'small' | 'large';
  };
  defaultComponent: D;
  classKey: IconClassKey;
}

declare const Icon: OverridableComponent<IconTypeMap>;

export type IconClassKey =
  | 'root'
  | 'colorSecondary'
  | 'colorAction'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  | 'fontSizeInherit'
  | 'fontSizeSmall'
  | 'fontSizeLarge';

export type IconProps<
  D extends React.ElementType = IconTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<IconTypeMap<P, D>, D>;

export default Icon;
