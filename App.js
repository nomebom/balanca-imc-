import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [peso, setPeso] = useState(0);
	const [altura, setAltura] = useState(0);
	const [resultado, setResultado] = useState(0);
	const [imc, setImc] = useState("");
	
	function Calcular (){
		let r = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
		if (r<=16.9){
			setImc("- Muito abaixo do peso");
		}else if(r >= 17 && r <= 24.9){
			setImc("- Peso normal");
		}else if(r >= 25 && r <=29.9){
			setImc("- Acima do peso");
		}else if(r >= 30 && r <=34.9){
			setImc("- Obesidade grau I");
		}else if(r >= 35 && r <= 40){
			setImc("- Obesidade grau II");
		}else{
			setImc("- Obesidade grau III");
		}
		setResultado("imc = "+r);
	}
	function Limpar (){
		setPeso(0);
		setAltura(0);
		setResultado(0);
		setImc("");
	}
  return (
    <View style={styles.container}>
		<View style={styles.titulo}>
		   <Text style={styles.textoTitulo}>CALCULADORA IMC</Text>
		</View>
		
		 <View style={styles.blocoImagem}>
		   <Image
			style={styles.imagem}
			source={require('./assets/samuel.jpg')}
		  />
		</View>
		  
		<View style={styles.bloco}>
			<Text style={styles.label}>Peso: </Text>
			<TextInput 
				style={styles.input}	
				value={peso}
				onChangeText={(peso)=>setPeso(peso)}
			/>
			
			<Text style={styles.label}>Altura: </Text>
			<TextInput 
				style={styles.input}	
				value={altura}
				onChangeText={(altura)=>setAltura(altura)}
			/>
		</View>
		<View style={styles.blocoBotao}>
			<TouchableOpacity style={styles.botao} onPress={Calcular}>
				<Text style={styles.textoBotao}>Calcular</Text>
			</TouchableOpacity>
			
			<TouchableOpacity style={styles.botao} onPress={Limpar}>
				<Text style={styles.textoBotao}>Limpar</Text>
			</TouchableOpacity>
		</View>
     
		   <View style={styles.boxResul}>
			  <Text style={styles.resul}> Resultado: {resultado} {imc}</Text>
		  </View>
		  
    </View>	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor:'#fff',
  },
  titulo:{
	  backgroundColor:'#8ba3b1',
	  height:'10%',
	  justifyContent:'center'
  },
  textoTitulo:{
	  fontSize:20,
	  textAlign:'center',
	  color:'#fff'
  },
  imagem:{
	width: 150,
    height: 150,
  },
  blocoImagem:{
	  alignItems:'center',
	  marginTop:30
  },
  bloco:{
	 width:'80%',
	 marginLeft:'10%'
  },
  label:{
	fontSize:20
  },
  input:{
	 borderWidth:1,
	 fontSize:30,
	 borderRadius:5
  },
  blocoBotao:{
	  flexDirection:'row',
	  width:'80%',
	  marginLeft:'10%'
  },
  botao:{
	  backgroundColor:'#8ba3b1',
	  width:'40%',
	  height:40,
	  justifyContent:'center',
	  marginLeft:'5%',
	  marginRight:'5%',
	  marginTop:20
  },
  textoBotao:{
	  textAlign:'center',
	  fontSize:20,
	  color:'#fff'
  },
	boxResul:{
		textAlign:'center',
		marginTop:100,
	},
	resul:{
		fontSize:30,
	}
});
