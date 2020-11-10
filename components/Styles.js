import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: { 
        //flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
        padding: 20,
        height: 90 ,
    
      },
      paragraph: {
        flex: 1,
        margin: 5,
        marginTop: 0,
        //fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      logo: {
        //flex: 2,
        height: 128,
        width: 128,
        borderRadius: 90
      }
})