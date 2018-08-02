import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import Button from './components/Button';
import styles from './App.css';

class App extends Component {
  clickHandle = () => {
    alert(1);
  }
  render() {
    return (
      <View style={styles.app}>
        <Button type="default" btnStyle={styles.btnStyle} radius={true} onPress={this.clickHandle}>default</Button>
        <Button type="warning" btnStyle={styles.btnStyle}  radius={true} onPress={this.clickHandle}>warning</Button>
        <Button type="primary" btnStyle={styles.btnStyle}  radius={true} onPress={this.clickHandle}>primary</Button>
        <Button type="danger" btnStyle={styles.btnStyle} onPress={this.clickHandle}>danger</Button>
        <Button type="secondary" btnStyle={styles.btnStyle} onPress={this.clickHandle}>secondary</Button>
        <Button type="info" btnStyle={styles.btnStyle} onPress={this.clickHandle}>info</Button>
      </View>
    );
  }
}
 
export default App;
