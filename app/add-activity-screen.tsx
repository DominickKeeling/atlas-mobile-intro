import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, router } from "expo-router";
import { useState } from 'react';
import { useActivitiesContext } from '@/components/ActivitiesProvider';



export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const {insertActivity} = useActivitiesContext();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Activity</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Enter steps" keyboardType="number-pad" onChangeText={(value) => setSteps(parseInt(value))}/>
      </View>
      <Pressable style={styles.addButton} onPress={() => {
        insertActivity(steps, new Date());
        router.push("/");
        }}>
        <Text style={styles.buttonText}>
          Add Activity
        </Text>
      </Pressable>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go Back</Text>
      </Link>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7E6",
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#D00414",
    padding: 16,
    width: "100%",
    textAlign: "center"
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold"
  },
  inputBox: {
    width: "100%",
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 10,
    marginRight: 1,
    marginLeft: 1

  },
  input: {
    backgroundColor: "white",
    color: "#4F4F4F"
  }
});
