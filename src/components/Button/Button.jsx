'use strict';
import {createElement, Component} from 'rax';
import Text from 'rax-text';
import Touchable from 'rax-touchable';

import styles from './Button.css';

class Button extends Component {

  state = {
    specTextsStyle: {}
  };

  componentDidMount() {}

  // type
  initBtnType = () => {
    switch (this.props.type) {
      case 'primary':
        return styles.primary;
        break;
      case 'warning':
        return styles.warning;
        break;
      case 'secondary':
        return styles.secondary;
        break;
      case 'info':
        return styles.info;
        break;
      case 'danger':
        return styles.danger;
        break;
      default:
        return styles.
      default;
        break;
    }
  }
  // radius
  initRadius = () => {
    const {radius} = this.props;
    return radius
      ? styles.radius 
      : {};
  }
  // default warning textColor默认是 #000000 但是依旧会被 textStyle 覆盖
  specTextsStyle = () => {
    const {type} = this.props;
    return type === 'warning' || type === 'default'
      ? styles.default
      : {};
  }
  render() {
    const {onPress, textStyle, btnStyle} = this.props;
    const {initBtnType, specTextsStyle, initRadius} = this;
    return (
      <Touchable
        onPress={onPress}
        style={[styles.raxBtn, initBtnType(), initRadius(), btnStyle]}>
        <Text style={[styles.raxBtnText, specTextsStyle(), textStyle]}>
          {this.props.children}
        </Text>
      </Touchable>
    );
  }
}

export default Button;
