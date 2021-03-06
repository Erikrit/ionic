import { AnimationBuilder, Mode, SpinnerTypes } from '../../interface';

export interface LoadingOptions {
  spinner?: SpinnerTypes | 'hide';
  message?: string;
  cssClass?: string | string[];
  showBackdrop?: boolean;
  duration?: number;
  translucent?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
