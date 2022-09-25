import * as React from 'react';
import { View, Text, Button } from 'react-native';


function StatScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Stats Screen</Text>
        
            <Button
                title="Wear History"
                onPress={() => navigation.navigate('Wear History')}
            />

        </View>
    );
}

export default StatScreen;