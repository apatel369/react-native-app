import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'

export default function Quote() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const postMessage = () => {
        if(!name || !email || !message){
            setError(true);
        }
        else{
            setError(false);
            setIsSubmitted(true);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {error ? <Text style={styles.status}>Pleaser enter Name, Email and Message </Text> : 
                <Text  style={styles.status}>Pleaser enter requested info</Text>}
                {isSubmitted ? <Text>Name: {name} Email {email}</Text>: <Text style={styles.req}>* required</Text>}
                <Text style={styles.label}>Name *</Text>
                <TextInput style={styles.input} onChangeText={text => setName(text)} value={name}/> 
                <Text style={styles.label}>Email *</Text>
                <TextInput style={styles.input} onChangeText={text => setEmail(text)} value={email}/> 
                <Text style={styles.label}>Phone number</Text>
                <TextInput style={styles.input} onChangeText={text => setPhone(text)} value={phone}/> 
                <Text style={styles.label}>Message *</Text>
                <TextInput style={styles.multi} onChangeText={text => setMessage(text)} value={message} multiline numberOfLines={6}/> 
                <TouchableOpacity style={styles.button} onPress={() => postMessage()}><Text>Submit quote</Text></TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }, 
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 26,
        fontFamily: 'OpenSans',
        width: 250
    },
    label: {
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20
    },
    req: {
        fontFamily: 'OpenSans',
        paddingTop: 10,
        fontStyle: 'italic'
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10
    },
    status: {
        paddingTop: 10,
        paddingBottom: 15
    }
})
