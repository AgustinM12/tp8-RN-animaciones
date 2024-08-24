import { View, Button, Text, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useEffect } from "react";


export default function HomeScreen() {

  // !  Valor inicial de las animaciones
  const translateY = useSharedValue(-500);
  const opacity = useSharedValue(1)
  const color = useSharedValue(1)

  const animatedTitle = useAnimatedStyle(() => {
    return {
      //! Transforma el titulo
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const animatedBackground = useAnimatedStyle(() => {
    return {
      // !Transforma el fondo
      opacity: color.value,
    };
  });


  //! Iniciar la animacion del titulo cuando cargue el componente
  useEffect(() => {
    //! Animación suave al valor 0 en el eje Y 
    translateY.value = withTiming(0, { duration: 1800 });
  }, []);

  // ! Animacion de desvanecimiento y cambio de color
  const handleFadeOut = () => {
    opacity.value = withTiming(0, { duration: 1500 });
    color.value = withTiming(0, { duration: 1500 });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundImage: 'linear-gradient(to bottom, #fafafa, #22d3ee, #0284c7)' }}>

      <Animated.View style={[{
        backgroundImage: 'linear-gradient(to bottom, #db2777, #192f6a)', flex: 1, alignItems: "center",
        position: "relative", width: "100%", height: "100%"
      }, animatedBackground]}>

        <Animated.View style={[{ flex: 1, }, animatedTitle]}>

          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}>¡Bienvenido a la aplicación!</Text>
          </View>

        </Animated.View>

      </Animated.View>

      <View style={{ paddingVertical: 10, position: "absolute", bottom: 0 }}>
        <TouchableOpacity style={{borderWidth:2, borderColor:"#FFFFFF", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 5, backgroundColor: "#a21caf" }} onPress={handleFadeOut}>
          <Text style={{ fontSize: 15, fontWeight: "semibold", color: "white" }}>Iniciar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
