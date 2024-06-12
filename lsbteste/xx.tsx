
import { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import logolsb from "./assets/logo.png";
import lsb from "./assets/fundolsb.png"
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./routes/user.route";


export default function AuthScreen() {
  const navigatior = useNavigation();
  const [modalzinVisible, setModalzinVisible] = useState(false);
  const [modalForgotPassword, setModalForgotPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const closeModalAndNavigate = () => {
    console.log("Fechando modal e navegando");
    setModalzinVisible(false);
    navigatior.navigate("Principal");
  };

  const Modalzin = () => {
    console.log("Abrindo modal");
    setModalzinVisible(true);
  };

  const openModalForgotPassword = () => {
    console.log("Abrindo modal");
    setModalForgotPassword(true);
  };

  

  return (
    <ImageBackground source={lsb} style={styles.bgimage} resizeMode="cover">
      <StatusBar backgroundColor="red" barStyle="default" />

      <SafeAreaView style={styles.paizao}>
        <View style={styles.imageContainer}>
          <Image
            source={logolsb}
            style={styles.logoimage}
            resizeMode="contain"
          ></Image>
        </View>

        <View style={styles.vazia}></View>

        <View style={styles.conteudopg}>
        

          <View>
            <TouchableOpacity style={styles.botao} onPress={Modalzin}>
              <Text style={styles.textbotao}>ENTRAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewbotao}>
            
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={openModalForgotPassword}
            >
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  textAlign: "center",
                  fontSize: 16,
                  color: "white",
                  padding: 6,
                  textDecorationLine: "underline",
                }}
              >
                Esqueci a senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          style={styles.pop}
          animationType="slide"
          transparent={true}
          visible={modalzinVisible}
          onRequestClose={() => {
            console.log("Pedido para fechar modal");
            setModalzinVisible(false);
          }}
        >
          <Pressable
            style={styles.centureview}
            onPress={(e) => {
              // Verificar se o clique foi dentro do modal ou fora dele
              const isInsideModal = e.target !== e.currentTarget;
              if (!isInsideModal) {
                // Clique fora do modal, fecha o modal
                setModalzinVisible(false);
              }
            }}
          >
            <KeyboardAvoidingView
              keyboardVerticalOffset={ + 200}
              style={styles.containerKeyBoard}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.modalview}>
                <View style={styles.viewimage}>
                  <Image
                    source={logolsb}
                    style={styles.imagemmodal}
                    resizeMode="contain"
                  ></Image>
                </View>

                <View style={styles.viewbemvindo}>
                  <Text style={styles.textomodal}>Bem Vindo a Lsb!</Text>
                  <Text style={styles.textfrase}>
                    Digite seu e-mail para entrar na sua conta
                  </Text>
                </View> 

                <View>
                  <Text style={styles.miniplace}>E-mail</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite aqui seu e-mail"
                    keyboardType="email-address"
                  />
                </View>

                <View>
                  <Text style={styles.miniplace}>Digite sua senha</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(password) => setPassword(password)}
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                  />
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.botaomodal}
                    onPress={closeModalAndNavigate}
                  >
                    <Text style={styles.textobotaomodal}>ENTRAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </Pressable>
        </Modal>

        <Modal
          style={styles.pop}
          animationType="slide"
          transparent={true}
          visible={modalForgotPassword}
          onRequestClose={() => {
            console.log("Pedido para fechar modal");
            setModalForgotPassword(false);
          }}
        >
          <Pressable
            style={styles.centureview}
            onPress={(e) => {
              // Verificar se o clique foi dentro do modal ou fora dele
              const isInsideModal = e.target !== e.currentTarget;
              if (!isInsideModal) {
                // Clique fora do modal, fecha o modal
                setModalForgotPassword(false);
              }
            }}
          >
            <KeyboardAvoidingView
              keyboardVerticalOffset={ + 90}
              style={styles.containerKeyBoard}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.modalview}>
                <View style={styles.viewimage}>
                  <Image
                    source={logolsb}
                    style={styles.imagemmodal}
                    resizeMode="contain"
                  ></Image>
                </View>

                <View style={styles.viewbemvindo}>
                  <Text style={styles.textomodal}>Esqueceu sua senha?</Text>
                  <Text style={styles.textfrase}>
                    Não se preocupe, digite seu email para redefini-la.
                  </Text>
                </View>

                <View>
                  <Text style={styles.miniplace}>E-mail</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite aqui seu e-mail"
                    keyboardType="email-address"
                  />
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.botaomodal}
                    
                
                  >
                    <Text style={styles.textobotaomodal}>ENVIAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </Pressable>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
    bgimage: {
        flex: 1,
        resizeMode: 'cover',
        paddingBottom: 20,
      },
  
      textbody:{
        color: 'white',
        fontSize: 40,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 32,
      
        paddingTop:10
    },
   
    imageContainer:{
     position: 'absolute',
     top: 30,
     left: 30,
     paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  
    logoimage:{
        width:70,
        height: 70,
    },
  
    botao:{
        backgroundColor: 'white',
        padding: 12,
        marginTop: 16,
        borderRadius: 50,
  
    },
    viewbotao:{
        marginTop: 16,
  
    },
  
    
    textbotao:{
        textAlign: "center",
        fontSize: 18,
        color: '#40FF01',
        fontFamily: 'Montserrat', 
        fontWeight: '700',
  
    },
  
    linha:{
        fontFamily: 'Montserrat',
        fontWeight: '300',
        textAlign: "center",
        fontSize: 16,
        color: 'white',
        padding: 6,
    },
  
    centureview:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },

  
    pop:{
        position:"absolute",
        bottom: 0,
        alignItems: "center",
    },
  
    modalview:{
        width:"100%", 
        backgroundColor: "white",
        padding: 20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flex: .5,
      },

      containerKeyBoard:{
        width:"100%", 
        backgroundColor: "white",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        flex: Platform.OS === 'ios' ? .55 : .6,
      },
  
    viewimage:{
        position: 'absolute',
        top: -75,
        left: "50%",
        transform:[{translateX: -50}],
        backgroundColor: "white",
        borderWidth: 4,
        borderRadius: 900, 
        borderColor: "#40FF01",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
  
        elevation: 6,
  
      },
  
      textomodal:{
        fontSize: 30,
        color: "#69B90C",
        textAlign: "left",
        fontFamily: "Monteserrat",
        fontWeight: '700',
        paddingTop: 60,
        lineHeight: 26,
      },
  
      viewbemvindo:{
        paddingLeft: 30,
        paddingRight: 30,
  
      },
  
  
      imagemmodal:{
        width:80,
        height: 80,
      },
  
      textfrase:{
        color: "#69B90C",
        fontFamily: "Monteserrat",
        textAlign: "left",
        fontSize: 16,
        width: "80%",
        marginTop: 5,
        fontWeight: '300',
        marginBottom: 30
      },
  
      boxtopicos:{
        marginTop: 24,
        paddingLeft: 30,
        paddingRight: 30,
  
  
  
      },
  
      topicos:{
        marginTop: 5,
        color: "#034677",
        fontFamily: "Monteserrat",
        fontSize: 16,
        fontWeight: '600',
  
  
  
      },
  
      botaomodal:{
        backgroundColor: "#40FF01",
        padding: 10,
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
  
        elevation: 6,
  
  
      },
  
  
      textobotaomodal:{
        textAlign: "center",
        fontSize: 18,
        color: "white",
        fontFamily: 'Montserrat', 
        fontWeight: '700',
  
  
      },
  
      inputContainer: {
        marginBottom: 20,
        
        position: "relative",
      },
  
      input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#69B90C",
        marginTop: 4,
        marginBottom: 7,
        marginLeft: 30,
        marginRight: 30,
      },
      miniplace:{
        color: "#69B90C",
        fontFamily: "Monteserrat",
        fontSize: 12,
        fontWeight: '600',
        backgroundColor: 'white',
        alignSelf: "flex-start",
        position: "relative",
        zIndex: 3,
        marginLeft: 45,
        bottom: -14,
        padding: 4,
    },
  
    vazia:{
      flex: .7,
  
    },
  
  conteudopg:{
    flex: .35,
    paddingHorizontal: 30,
  },
  
  paizao:{
     flex: 1,
     paddingVertical: Platform.OS === 'ios' ? 40 : 20,
  },
  
  
  });
