import { useActivities } from "@/hooks/useActivities";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Alert, StyleSheet, Text, View } from "react-native";
import Activity from "@/components/Activity";
import { Activity as ActivityType } from "@/hooks/useActivities";
import { FlashList } from "@shopify/flash-list";
import SwipeableActivity from "../components/SwipeableActivity";
import { useState } from "react";

export default function Index() {
  const { activities } = useActivitiesContext();
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.id} />
        ))}
        <FlashList
          renderItem={({ item }) => <SwipeableActivity activity={item} />}
          data={activities}
          estimatedItemSize={50}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
            Alert.alert("Refreshed");
            setRefreshing(false);
            }, 1000);
          }}
        />
      </View>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    color: "white"
  },
  list: {
    padding: 32,
  }
})