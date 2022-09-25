import * as React from 'react';
import { Button, View, Text } from 'react-native';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button
                title="Log Outfit"
                onPress={() => navigation.navigate('Log Outfit')}
            />

        </View>
    );
}

export default HomeScreen;