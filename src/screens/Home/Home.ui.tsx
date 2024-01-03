import styles from './Home.styles';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function FeedUI() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
