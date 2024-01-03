import styles from './Details.styles';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DetailsUI() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
}
