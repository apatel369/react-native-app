import React from 'react'
import { StyleSheet, Image, ScrollView, View, Text } from 'react-native'
import imageA from './assets/sam-moqadam-cU5TUyEaZXQ-unsplash.jpg'   
import imageB from './assets/sam-moqadam-e35zzMesA9I-unsplash.jpg'
import imageC from './assets/sam-moqadam-UkwbRZkt8zM-unsplash.jpg'
const blockA = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eius quaerat, atque, vero sequi, 
inventore nisi maxime tenetur obcaecati maiores nobis quibusdam iusto quae? Dicta repudiandae non fugiat nihil ut?
Illum, itaque consequatur. Magnam maiores vero ea, quaerat temporibus numquam, aliquam porro cumque dolorem eligendi
 doloribus optio quia reprehenderit minus quod beatae dolores mollitia quam? Pariatur veniam recusandae voluptates magni.
Tempore recusandae corrupti, a reiciendis inventore natus quibusdam alias, architecto deserunt deleniti eveniet non, 
repudiandae vitae nulla impedit eum facilis ipsam illum aperiam officiis veritatis dolorum voluptate. Excepturi, rerum impedit!
Obcaecati, illo. Officiis sed eaque cupiditate itaque accusamus nobis qui fugiat repellat facilis blanditiis, accusantium obcaecati, 
illum aut dignissimos iure dolorum sit et, perferendis beatae! Voluptatem mollitia alias fuga et!
Maxime minus consectetur commodi, fuga earum possimus nulla quidem beatae deserunt a exercitationem numquam porro enim atque sapiente 
asperiores quibusdam laborum magnam sunt reiciendis architecto ea aspernatur culpa aliquam. Eveniet.`
const blockB = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eius quaerat, atque, vero sequi, 
inventore nisi maxime tenetur obcaecati maiores nobis quibusdam iusto quae? Dicta repudiandae non fugiat nihil ut?
Illum, itaque consequatur. Magnam maiores vero ea, quaerat temporibus numquam, aliquam porro cumque dolorem eligendi
 doloribus optio quia reprehenderit minus quod beatae dolores mollitia quam? Pariatur veniam recusandae voluptates magni.
Tempore recusandae corrupti, a reiciendis inventore natus quibusdam alias, architecto deserunt deleniti eveniet non, 
repudiandae vitae nulla impedit eum facilis ipsam illum aperiam officiis veritatis dolorum voluptate. Excepturi, rerum impedit!
Obcaecati, illo. Officiis sed eaque cupiditate itaque accusamus nobis qui fugiat repellat facilis blanditiis, accusantium obcaecati, 
illum aut dignissimos iure dolorum sit et, perferendis beatae! Voluptatem mollitia alias fuga et!
Maxime minus consectetur commodi, fuga earum possimus nulla quidem beatae deserunt a exercitationem numquam porro enim atque sapiente 
asperiores quibusdam laborum magnam sunt reiciendis architecto ea aspernatur culpa aliquam. Eveniet.`

export default function About() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{width: '100', height:300 }}></Image>
                <Text style={styles.heading}>We diff</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{width: '100', height:300 }}></Image>
                <Text style={styles.heading}>Leaders</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{width: '100', height:300 }}></Image>
                <Text style={styles.heading}>Experts</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5
    },
    text:{
        fontFamily: 'OpenSans'
    }
})
