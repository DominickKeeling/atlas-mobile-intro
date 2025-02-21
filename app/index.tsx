import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import SwipeableActivity from "../components/SwipeableActivity";

export default function Index() {
  const { activities, deleteAllActivities  } = useActivitiesContext();
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          data={activities}
          renderItem={({ item }) => <SwipeableActivity activity={item} />}
          estimatedItemSize={50}
        />
      </View>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
      <Pressable style={styles.deleteButton}
      onPress={() => { deleteAllActivities();
      }}>
        <Text style={styles.buttonText}>Delete All Activities</Text>
      </Pressable>
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
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    textAlign: "center"
  },
  buttonText: {
    color: "white",
    alignItems: "center"
  },
  deleteButton: {
    backgroundColor: "#D00414",
    width: "100%",
    alignItems: "center",
    padding: 16,
  },
  list: {
    flexGrow: 1,
    marginTop: 25,
    width: "100%",
    margin: 30
  }
})